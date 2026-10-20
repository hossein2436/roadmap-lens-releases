/* Roadmap Lens 2.1 — built 2026-10-20T14:45:59.978Z */
if (!(globalThis.SFR && globalThis.SFR.booted)) {
globalThis.SFR = { BUILD: 1, VERSION: "2.1", CSS: "/* ==========================================================================\n   Roadmap Lens — design system «نقشه‌راه»\n   Persian-first, RTL-native. Tokens → atoms → layout → views.\n   Type scale (6): 12 · 13 · 14 · 16 · 20 · 48   |  Spacing: 4px grid\n   Radius: control 8 · card 12 · panel 16          |  Motion: 160–240ms\n   Data marks use the validated status palette (--s-*); text never wears it.\n   ========================================================================== */\n\n:host { all: initial; }\n\n/* ---------- tokens ---------- */\n.app, .launcher {\n  --font: \"SFR Vazirmatn\", Vazirmatn, Tahoma, system-ui, sans-serif;\n  --fs-xs: 12px; --fs-sm: 13px; --fs-md: 14px; --fs-lg: 16px; --fs-xl: 20px; --fs-hero: 48px;\n  --r-control: 8px; --r-card: 12px; --r-panel: 16px; --r-pill: 999px;\n  --ease: cubic-bezier(.2, 0, 0, 1); --t-fast: 160ms; --t: 220ms;\n\n  --bg: #f6f5f2;\n  --surface: #fcfcfb;\n  --surface-2: #f1f0ec;\n  --surface-3: #e8e6e0;\n  --ink: #141413;\n  --ink-2: #52514e;\n  --ink-3: #6b6a64;\n  --line: rgba(11, 11, 11, .09);\n  --line-2: rgba(11, 11, 11, .16);\n  --grid: #e1e0d9;\n  --baseline: #c3c2b7;\n  --primary: #141413; --primary-ink: #fcfcfb;\n  --accent: #2a78d6; --accent-soft: rgba(42, 120, 214, .10); --accent-ink: #1c5cab;\n  --brand: #ef0d8a;\n  --danger: #d03b3b; --danger-soft: rgba(208, 59, 59, .10);\n  --ok-ink: #006300;\n  --focus: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent);\n  --shadow-card: 0 1px 2px rgba(20, 20, 19, .05);\n  --shadow-lift: 0 2px 4px rgba(20, 20, 19, .06), 0 8px 24px rgba(20, 20, 19, .08);\n  --shadow-overlay: 0 24px 64px -16px rgba(20, 20, 19, .28), 0 2px 8px rgba(20, 20, 19, .08);\n  --scrim: rgba(20, 20, 19, .28);\n\n  /* status palette — validated (light): CVD ΔE ≥ 9.6, normal-vision ΔE ≥ 15.6 adjacent */\n  --s-done: #008300; --s-devdone: #1baf7a; --s-progress: #2a78d6;\n  --s-pending: #eda100; --s-todo: #6250d6; --s-canceled: #e34948;\n  --s-cat1: #2a78d6;\n}\n.app[data-theme=\"dark\"], .launcher.dark {\n  --bg: #0f0f0e;\n  --surface: #1a1a19;\n  --surface-2: #232321;\n  --surface-3: #2d2d2a;\n  --ink: #f0efec;\n  --ink-2: #c3c2b7;\n  --ink-3: #9d9b92;\n  --line: rgba(255, 255, 255, .09);\n  --line-2: rgba(255, 255, 255, .16);\n  --grid: #2c2c2a;\n  --baseline: #383835;\n  --primary: #f0efec; --primary-ink: #141413;\n  --accent: #3987e5; --accent-soft: rgba(57, 135, 229, .16); --accent-ink: #86b6ef;\n  --danger: #e66767; --danger-soft: rgba(230, 103, 103, .14);\n  --ok-ink: #0ca30c;\n  --shadow-card: none;\n  --shadow-lift: 0 0 0 1px rgba(255, 255, 255, .06), 0 8px 24px rgba(0, 0, 0, .4);\n  --shadow-overlay: 0 24px 64px -12px rgba(0, 0, 0, .7), 0 0 0 1px rgba(255, 255, 255, .06);\n  --scrim: rgba(0, 0, 0, .5);\n  /* dark steps — validated as a set against #1a1a19 */\n  --s-done: #008300; --s-devdone: #1baf7a; --s-progress: #3987e5;\n  --s-pending: #c98500; --s-todo: #9085e9; --s-canceled: #e66767;\n  --s-cat1: #3987e5;\n}\n\n/* ---------- base ---------- */\n.app {\n  position: fixed; inset: 0;\n  display: grid; grid-template-rows: 56px 1fr;\n  background: var(--bg); color: var(--ink);\n  font: 400 var(--fs-md)/1.7 var(--font);\n  letter-spacing: 0;\n  -webkit-font-smoothing: antialiased;\n  color-scheme: light;\n  direction: rtl; text-align: start;\n  animation: app-in var(--t) var(--ease);\n}\n.app[data-theme=\"dark\"] { color-scheme: dark; }\n@keyframes app-in { from { opacity: 0; transform: scale(.995); } }\n.app *, .app *::before, .app *::after { box-sizing: border-box; }\n:where(.app) button, :where(.app) input, :where(.app) select, :where(.app) textarea { font: inherit; color: inherit; letter-spacing: 0; }\n:where(.app) button { cursor: pointer; background: none; border: 0; padding: 0; }\n.app :focus-visible { outline: none; box-shadow: var(--focus); border-radius: var(--r-control); }\n.app [hidden] { display: none !important; }\n:where(.app) a { color: var(--accent-ink); text-decoration: none; }\n:where(.app) a:hover { text-decoration: underline; }\n:where(.app) :where(h1, h2, h3, h4, p, ul, ol, dl, dd) { margin: 0; padding: 0; }\n:where(.app) :where(ul, ol) { list-style: none; }\n.grow { flex: 1 1 auto; }\n.muted { color: var(--ink-3); }\n.center { display: flex; justify-content: center; }\n.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }\n.ic { flex: none; display: inline-block; vertical-align: middle; stroke-width: 1.75; }\n.flip-x { transform: scaleX(-1); }\n.flip-y { transform: scaleY(-1); }\n.spin { animation: spin 1s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\nkbd {\n  font: 500 11px/1 var(--font); color: var(--ink-3);\n  border: 1px solid var(--line-2); border-bottom-width: 2px; border-radius: 4px; padding: 2px 4px;\n  background: var(--surface);\n}\nbdi.key { font: 500 var(--fs-xs)/1 ui-monospace, \"SF Mono\", Menlo, monospace; color: var(--ink-3); unicode-bidi: isolate; }\n.app ::-webkit-scrollbar { width: 10px; height: 10px; }\n.app ::-webkit-scrollbar-thumb { background: var(--surface-3); border-radius: 10px; border: 2px solid transparent; background-clip: content-box; }\n.app ::-webkit-scrollbar-thumb:hover { background-color: var(--line-2); }\n\n/* ---------- atoms: buttons ---------- */\n.btn {\n  display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px;\n  border-radius: var(--r-control); font-weight: 600; font-size: var(--fs-sm); white-space: nowrap;\n  transition: background var(--t-fast) var(--ease), transform var(--t-fast) var(--ease), border-color var(--t-fast);\n}\n.btn:active { transform: scale(.98); }\n.btn-primary { background: var(--primary); color: var(--primary-ink); }\n.btn-primary:hover { opacity: .9; }\n.btn-outline { border: 1px solid var(--line-2); background: var(--surface); }\n.btn-outline:hover, .btn-ghost:hover { background: var(--surface-2); }\n.btn-outline.is-active { border-color: var(--accent); background: var(--accent-soft); color: var(--accent-ink); }\n.btn-ghost { color: var(--ink-2); }\n.btn-ghost.is-active { color: var(--ink); background: var(--surface-2); }\n.btn-soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }\n.btn-soft.is-active .ic { color: var(--ok-ink); }\n.btn-sm { height: 32px; padding: 0 10px; }\n.btn-xs { height: 28px; padding: 0 8px; font-size: var(--fs-xs); }\n.btn.is-busy { opacity: .6; pointer-events: none; }\n.icon-btn {\n  display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: var(--r-control); color: var(--ink-2);\n  transition: background var(--t-fast);\n}\n.icon-btn:hover { background: var(--surface-2); color: var(--ink); text-decoration: none; }\n.icon-btn.is-busy .ic { animation: spin 1s linear infinite; }\n.link { color: var(--accent-ink); font-weight: 600; font-size: var(--fs-sm); }\n.link:hover { text-decoration: underline; }\n\n/* ---------- atoms: chips, pills, counts, tags ---------- */\n.chip {\n  display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 12px;\n  border-radius: var(--r-pill); border: 1px solid var(--line); background: var(--surface);\n  font-size: var(--fs-sm); font-weight: 500; color: var(--ink-2); white-space: nowrap;\n  transition: all var(--t-fast) var(--ease);\n}\n.chip:hover { border-color: var(--line-2); color: var(--ink); }\n.chip.is-on { background: var(--ink); border-color: var(--ink); color: var(--surface); }\n.chip.is-on .av { box-shadow: 0 0 0 1.5px var(--ink); }\n.chip-sm { height: 28px; padding: 0 10px; font-size: var(--fs-xs); }\n.count {\n  display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 6px;\n  border-radius: var(--r-pill); background: var(--surface-2); color: var(--ink-2);\n  font-size: var(--fs-xs); font-weight: 600; line-height: 1;\n}\n.btn-outline.is-active .count, .chip.is-on .count { background: var(--accent); color: #fff; }\n.pill {\n  display: inline-flex; align-items: center; gap: 6px; height: 22px; padding: 0 8px;\n  border-radius: var(--r-pill); font-size: var(--fs-xs); font-weight: 600; color: var(--ink-2); white-space: nowrap;\n  background: var(--surface-2);\n}\n.pill .dot { width: 8px; height: 8px; border-radius: 50%; flex: none; }\n.pill-done .dot { background: var(--s-done); } .pill-devdone .dot { background: var(--s-devdone); }\n.pill-progress .dot { background: var(--s-progress); } .pill-pending .dot { background: var(--s-pending); }\n.pill-todo .dot { background: var(--s-todo); } .pill-canceled .dot { background: var(--s-canceled); }\n.pill-done { background: color-mix(in srgb, var(--s-done) 11%, transparent); }\n.pill-devdone { background: color-mix(in srgb, var(--s-devdone) 13%, transparent); }\n.pill-progress { background: color-mix(in srgb, var(--s-progress) 11%, transparent); }\n.pill-pending { background: color-mix(in srgb, var(--s-pending) 15%, transparent); }\n.pill-todo { background: color-mix(in srgb, var(--s-todo) 10%, transparent); }\n.pill-canceled { background: color-mix(in srgb, var(--s-canceled) 10%, transparent); }\n.pill-late { background: var(--danger-soft); color: var(--danger); gap: 4px; }\n.pill-plain { background: var(--surface-2); }\n.tag {\n  display: inline-flex; align-items: center; gap: 4px; height: 22px; padding: 0 8px; border-radius: 6px;\n  background: var(--surface-2); color: var(--ink-2); font-size: var(--fs-xs); font-weight: 500; margin-inline-end: 4px;\n}\n.size {\n  display: inline-grid; place-items: center; height: 20px; min-width: 24px; padding: 0 6px; border-radius: 6px;\n  border: 1px solid var(--line-2); font: 600 11px/1 var(--font); color: var(--ink-2); direction: ltr;\n}\n\n/* ---------- atoms: avatars ---------- */\n.av {\n  display: inline-grid; place-items: center; flex: none; border-radius: 50%; object-fit: cover;\n  background: var(--surface-3); color: var(--ink-2); font-weight: 700; overflow: hidden;\n  box-shadow: 0 0 0 1.5px var(--surface);\n}\n.av-xs { width: 20px; height: 20px; font-size: 9px; }\n.av-sm { width: 28px; height: 28px; font-size: 11px; }\n.av-md { width: 32px; height: 32px; font-size: 12px; }\n.av-empty { background: var(--surface-2); color: var(--ink-3); }\n\n/* ---------- atoms: inputs ---------- */\n.search {\n  display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 12px; min-width: 300px;\n  border: 1px solid var(--line-2); border-radius: var(--r-control); background: var(--surface); color: var(--ink-3);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.search input { flex: 1; min-width: 0; border: 0; outline: 0; background: none; color: var(--ink); font-size: var(--fs-sm); }\n.search input::placeholder { color: var(--ink-3); }\n.search input:focus-visible { box-shadow: none; }\n.search.sm { height: 32px; min-width: 0; margin: 0 16px 8px; }\n.select {\n  position: relative; display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 10px;\n  border: 1px solid var(--line-2); border-radius: var(--r-control); background: var(--surface); color: var(--ink-3);\n}\n.select select { appearance: none; border: 0; outline: 0; background: none; color: var(--ink); font-size: var(--fs-sm); padding-inline-end: 4px; max-width: 260px; cursor: pointer; }\n.select:focus-within { border-color: var(--accent); }\n\n/* segmented switch */\n.switch { display: inline-flex; padding: 3px; gap: 2px; border-radius: 10px; background: var(--surface-2); border: 1px solid var(--line); }\n.switch button {\n  display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px; border-radius: 7px;\n  font-size: var(--fs-sm); font-weight: 500; color: var(--ink-2); white-space: nowrap; transition: all var(--t-fast);\n}\n.switch button:hover { color: var(--ink); }\n.switch button[aria-selected=\"true\"] { background: var(--surface); color: var(--ink); font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 0 0 1px var(--line); }\n.switch.big button { height: 34px; padding: 0 14px; }\n\n/* ---------- top bar ---------- */\n.topbar {\n  display: flex; align-items: center; gap: 24px; padding: 0 20px;\n  background: var(--surface); border-bottom: 1px solid var(--line);\n}\n.brand { display: flex; align-items: center; gap: 10px; min-width: 0; }\n.logo {\n  display: grid; place-items: center; width: 32px; height: 32px; border-radius: 9px;\n  background: var(--ink); color: var(--surface); position: relative;\n}\n.logo::after { content: \"\"; position: absolute; inset-block-start: -2px; inset-inline-start: -2px; width: 10px; height: 10px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 2px var(--surface); }\n.brand-text { display: grid; line-height: 1.3; }\n.brand-text b { font-size: var(--fs-md); font-weight: 700; }\n.brand-text small { font-size: var(--fs-xs); color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px; }\n.tabs { display: flex; gap: 4px; align-self: stretch; }\n.tabs button {\n  position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 0 14px;\n  font-weight: 500; color: var(--ink-2); transition: color var(--t-fast);\n}\n.tabs button:hover { color: var(--ink); }\n.tabs button[aria-selected=\"true\"] { color: var(--ink); font-weight: 700; }\n.tabs button[aria-selected=\"true\"]::after {\n  content: \"\"; position: absolute; inset-inline: 10px; bottom: -1px; height: 2px; border-radius: 2px 2px 0 0; background: var(--ink);\n}\n.badge {\n  display: inline-grid; place-items: center; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px;\n  background: var(--brand); color: #fff; font-size: 11px; font-weight: 700; line-height: 1;\n}\n.top-actions { display: flex; align-items: center; gap: 4px; margin-inline-start: auto; }\n.sync { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); margin-inline-end: 8px; }\n.me { margin-inline-start: 8px; display: inline-flex; }\n\n/* ---------- main & state ---------- */\n.main { position: relative; min-height: 0; overflow: hidden; }\n.view { height: 100%; min-height: 0; }\n.view[data-view=\"board\"] { display: flex; flex-direction: column; }\n.view[data-view=\"following\"], .view[data-view=\"dashboard\"] { overflow-y: auto; }\n.state-screen { height: 100%; padding-top: 72px; }\n.state-screen .kanban { padding-top: 0; }\n\n/* ---------- board toolbar ---------- */\n.toolbar { padding: 16px 20px 12px; display: grid; gap: 12px; }\n.tb-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.seg-group { display: flex; gap: 6px; flex-wrap: wrap; }\n.facepile { display: flex; align-items: center; }\n.face { margin-inline-start: -6px; border-radius: 50%; transition: transform var(--t-fast) var(--ease); }\n.face:first-child { margin-inline-start: 0; }\n.face:hover { transform: translateY(-2px); z-index: 1; }\n.face.is-on .av { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent); }\n.face.more { display: grid; place-items: center; width: 32px; height: 32px; background: var(--surface-2); border: 1px dashed var(--line-2); color: var(--ink-2); margin-inline-start: 4px; }\n.status-filter { display: flex; gap: 4px; flex-wrap: wrap; }\n.sf {\n  display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px; border-radius: var(--r-pill);\n  font-size: var(--fs-sm); color: var(--ink-2); border: 1px solid transparent; transition: all var(--t-fast);\n}\n.sf .dot { width: 8px; height: 8px; border-radius: 50%; }\n.sf b { font-weight: 600; color: var(--ink-3); font-size: var(--fs-xs); }\n.sf:hover { background: var(--surface-2); }\n.sf.is-on { background: var(--surface); border-color: var(--line-2); color: var(--ink); font-weight: 600; box-shadow: var(--shadow-card); }\n.sf-done .dot { background: var(--s-done); } .sf-devdone .dot { background: var(--s-devdone); } .sf-progress .dot { background: var(--s-progress); }\n.sf-pending .dot { background: var(--s-pending); } .sf-todo .dot { background: var(--s-todo); } .sf-canceled .dot { background: var(--s-canceled); }\n.active-chips { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding-inline-start: 12px; border-inline-start: 1px solid var(--line); }\n.active-chips .chip { height: 28px; padding: 0 10px; font-size: var(--fs-xs); }\n.result-count { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--ink-3); }\n\n/* ---------- kanban ---------- */\n.kanban {\n  flex: 1; min-height: 0; display: flex; gap: 12px; padding: 4px 20px 20px; overflow-x: auto; overflow-y: hidden;\n  scroll-snap-type: x proximity; overscroll-behavior-x: contain;\n}\n.column {\n  flex: 0 0 296px; width: 296px; min-width: 0; display: flex; flex-direction: column; min-height: 0; max-height: 100%;\n  background: var(--surface-2); border-radius: var(--r-panel); border: 1px solid transparent;\n  scroll-snap-align: start; transition: border-color var(--t-fast), background var(--t-fast);\n}\n.column.is-backlog { flex-basis: 312px; width: 312px; }\n.column.is-current { background: color-mix(in srgb, var(--accent) 6%, var(--surface-2)); border-color: color-mix(in srgb, var(--accent) 22%, transparent); }\n.column.is-over { border-color: var(--accent); border-style: dashed; background: var(--accent-soft); }\n.column.rail {\n  flex: 0 0 48px; align-items: center; gap: 12px; padding: 16px 0; color: var(--ink-2); cursor: pointer;\n}\n.column.rail span { writing-mode: vertical-rl; font-weight: 700; }\n.column.rail b { font-size: var(--fs-xs); color: var(--ink-3); }\n.column.rail:hover { background: var(--surface-3); }\n.col-head { padding: 12px 14px 10px; display: grid; gap: 8px; }\n.col-title { display: flex; align-items: baseline; gap: 8px; }\n.col-title b { font-size: var(--fs-lg); font-weight: 700; line-height: 1.3; }\n.col-title small { font-size: var(--fs-xs); color: var(--ink-3); }\n.now { font-size: 11px; font-weight: 700; color: var(--accent-ink); background: var(--accent-soft); padding: 1px 8px; border-radius: var(--r-pill); align-self: center; }\n.col-dist { display: flex; gap: 2px; height: 6px; border-radius: 3px; overflow: hidden; }\n.col-dist i { display: block; height: 100%; min-width: 2px; }\n.col-dist.is-none { background: var(--surface-3); }\n.col-done { font-size: var(--fs-xs); color: var(--ink-3); line-height: 1; }\n.col-body { flex: 1; min-height: 0; overflow-y: auto; padding: 2px 8px 10px; display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: 8px; }\n.col-empty { display: grid; justify-items: center; gap: 4px; padding: 24px 0; color: var(--ink-3); font-size: var(--fs-sm); }\n.more {\n  width: 100%; height: 36px; border-radius: var(--r-control); border: 1px dashed var(--line-2);\n  color: var(--ink-2); font-size: var(--fs-xs); font-weight: 600;\n}\n.more:hover { background: var(--surface); color: var(--ink); }\n\n/* card */\n.card {\n  position: relative; display: grid; grid-template-columns: minmax(0, 1fr); min-width: 0; gap: 8px; padding: 12px; border-radius: var(--r-card);\n  background: var(--surface); border: 1px solid var(--line); box-shadow: var(--shadow-card);\n  cursor: pointer; transition: box-shadow var(--t-fast) var(--ease), transform var(--t-fast) var(--ease), border-color var(--t-fast);\n  animation: card-in var(--t) var(--ease) both;\n}\n@keyframes card-in { from { opacity: 0; transform: translateY(4px); } }\n.card:hover { box-shadow: var(--shadow-lift); border-color: var(--line-2); transform: translateY(-1px); }\n.card.is-dragging { opacity: .4; transform: rotate(-1.5deg); }\n.card.st-canceled .card-title { color: var(--ink-3); text-decoration: line-through; text-decoration-color: var(--line-2); }\n.card.st-done { background: color-mix(in srgb, var(--s-done) 3%, var(--surface)); }\n.card-top { display: flex; align-items: center; gap: 6px; min-height: 24px; }\n.card-title {\n  font-size: var(--fs-md); font-weight: 600; line-height: 1.65; color: var(--ink);\n  unicode-bidi: plaintext; text-align: start;\n  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;\n}\n.card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: -2px; }\n.card-tags bdi { display: inline-block; max-width: 100%; height: 20px; padding: 0 6px; border-radius: 5px; background: var(--surface-2); color: var(--ink-2); font-size: 11px; font-weight: 500; line-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.card-epic {\n  display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); line-height: 1.5;\n  unicode-bidi: plaintext;\n}\n.card-epic span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.card-foot { display: flex; align-items: center; gap: 6px; padding-top: 8px; border-top: 1px solid var(--line); font-size: var(--fs-xs); color: var(--ink-2); }\n.owner { max-width: 110px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.meta { display: inline-flex; align-items: center; gap: 4px; color: var(--ink-3); font-weight: 500; }\n.meta.is-new { color: var(--ink); font-weight: 700; }\n.star { display: inline-grid; place-items: center; width: 28px; height: 28px; margin: -4px; border-radius: 8px; color: var(--ink-3); opacity: 0; transition: all var(--t-fast); }\n.card:hover .star, .card:focus-within .star, .star.is-on, tr:hover .star, .inbox-item .star { opacity: 1; }\n.star:hover { background: var(--surface-2); color: var(--ink); }\n.star.is-on { color: #e4a400; }\n.star.is-on .ic { fill: currentColor; }\n.news-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 20%, transparent); flex: none; }\n.card.has-news { border-color: color-mix(in srgb, var(--brand) 35%, var(--line)); }\n\n/* skeletons */\n.skel { pointer-events: none; animation: none; }\n.skel i, .skel-line, .skel-block { display: block; height: 12px; border-radius: 6px; background: linear-gradient(90deg, var(--surface-2), var(--surface-3), var(--surface-2)); background-size: 200% 100%; animation: shimmer 1.4s infinite; }\n.skel i.short { width: 55%; }\n.skel-line { width: 60%; height: 16px; }\n.skel-block { height: 56px; border-radius: 10px; margin-bottom: 8px; }\n@keyframes shimmer { to { background-position: -200% 0; } }\n\n/* ---------- table ---------- */\n.table-wrap { flex: 1; min-height: 0; overflow: auto; margin: 0 20px 20px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel); }\n.grid-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-sm); }\n.grid-table th { position: sticky; top: 0; z-index: 1; background: var(--surface); text-align: start; border-bottom: 1px solid var(--line-2); padding: 0; }\n.grid-table th button { display: flex; align-items: center; gap: 4px; width: 100%; height: 40px; padding: 0 12px; font-weight: 600; color: var(--ink-2); font-size: var(--fs-xs); }\n.grid-table th[aria-sort=\"ascending\"] button, .grid-table th[aria-sort=\"descending\"] button { color: var(--ink); }\n.grid-table td { padding: 10px 12px; border-bottom: 1px solid var(--line); vertical-align: middle; white-space: nowrap; }\n.grid-table td.t-title { white-space: normal; min-width: 320px; max-width: 520px; font-weight: 500; unicode-bidi: plaintext; text-align: start; }\n.grid-table tbody tr { cursor: pointer; transition: background var(--t-fast); }\n.grid-table tbody tr:hover { background: var(--surface-2); }\n.grid-table tr.has-news td:first-child { box-shadow: inset -3px 0 0 var(--brand); }\n.num { font-variant-numeric: tabular-nums; }\n.who { display: inline-flex; align-items: center; gap: 6px; }\n\n/* ---------- popover ---------- */\n.popover {\n  position: fixed; z-index: 30; display: flex; flex-direction: column; width: 360px; max-height: min(72vh, 640px);\n  background: var(--surface); border: 1px solid var(--line-2); border-radius: var(--r-panel); box-shadow: var(--shadow-overlay);\n  animation: pop-in var(--t-fast) var(--ease);\n}\n.popover.pop-filters { width: 560px; }\n@keyframes pop-in { from { opacity: 0; transform: translateY(-4px) scale(.99); } }\n.pop-head { display: flex; align-items: baseline; gap: 12px; padding: 16px 16px 10px; }\n.pop-head b { font-size: var(--fs-lg); }\n.pop-head .muted { font-size: var(--fs-xs); }\n.pop-body { overflow-y: auto; padding: 0 16px 12px; display: grid; gap: 16px; }\n.pop-foot { display: flex; justify-content: space-between; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--line); }\n.fgroup h4 { display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); font-weight: 700; color: var(--ink-3); margin-bottom: 8px; }\n.fgroup h4 small { color: var(--accent-ink); }\n.fgroup .chips { display: flex; flex-wrap: wrap; gap: 6px; }\n.pop-body.people { gap: 2px; }\n.person {\n  display: flex; align-items: center; gap: 10px; width: 100%; padding: 6px 8px; border-radius: var(--r-control);\n  text-align: start; font-size: var(--fs-sm);\n}\n.person span { flex: 1; }\n.person b, .person small { font-size: var(--fs-xs); color: var(--ink-3); font-weight: 500; }\n.person:hover, .person.is-on { background: var(--surface-2); }\n.person.is-on span { font-weight: 700; }\n\n/* ---------- drawer & sheet ---------- */\n.drawer, .sheet { position: fixed; inset: 0; z-index: 20; pointer-events: none; }\n.scrim { position: absolute; inset: 0; background: var(--scrim); opacity: 0; transition: opacity var(--t) var(--ease); }\n.drawer-panel, .sheet-panel {\n  position: absolute; inset-block: 0; inset-inline-end: 0; width: min(640px, 100vw);\n  display: flex; flex-direction: column; background: var(--surface); box-shadow: var(--shadow-overlay);\n  transform: translateX(-104%); transition: transform 260ms var(--ease);\n  border-start-end-radius: 0; border-end-end-radius: 0;\n}\n.sheet-panel { width: min(520px, 100vw); }\n.drawer.is-open, .sheet.is-open { pointer-events: auto; }\n.drawer.is-open .scrim, .sheet.is-open .scrim { opacity: 1; }\n.drawer.is-open .drawer-panel, .sheet.is-open .sheet-panel { transform: none; }\n.d-head { display: flex; align-items: center; gap: 4px; height: 56px; padding: 0 16px; border-bottom: 1px solid var(--line); flex: none; }\n.d-head bdi.key { font-size: var(--fs-sm); margin-inline-end: 8px; }\n.d-head > b { font-size: var(--fs-lg); margin-inline-end: 8px; }\n.d-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 24px; }\n.d-scroll > * { flex: none; }\n.d-hero { display: grid; gap: 12px; }\n.d-badges { display: flex; gap: 6px; flex-wrap: wrap; }\n.d-hero h2 { font-size: var(--fs-xl); font-weight: 700; line-height: 1.6; unicode-bidi: plaintext; text-align: start; }\n.follow-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n.watchers { display: flex; align-items: center; font-size: var(--fs-xs); }\n.watchers .av { margin-inline-start: -6px; }\n.watchers .av:first-child { margin-inline-start: 0; }\n.watchers .muted { margin-inline-start: 8px; }\n.facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--r-card); overflow: hidden; }\n.fact { background: var(--surface); padding: 10px 12px; display: grid; gap: 2px; min-width: 0; }\n.fact:last-child:nth-child(odd) { grid-column: 1 / -1; }\n.fact dt { font-size: var(--fs-xs); color: var(--ink-3); }\n.fact dd { font-size: var(--fs-sm); font-weight: 500; overflow-wrap: anywhere; }\n.fact .select { width: 100%; margin-top: 2px; }\n.fact .select select { flex: 1; max-width: none; }\n.d-section { display: grid; gap: 12px; }\n.d-section h3 { display: flex; align-items: center; gap: 8px; font-size: var(--fs-lg); font-weight: 700; }\n.rich { font-size: var(--fs-md); line-height: 1.85; color: var(--ink); overflow-wrap: anywhere; }\n.rich p, .rich li { unicode-bidi: plaintext; text-align: start; }\n.rich p + p { margin-top: 8px; }\n.rich ul, .rich ol { padding-inline-start: 20px; list-style: revert; }\n.rich img { max-width: 100%; height: auto; border-radius: 8px; }\n.rich pre, .rich code { font-family: ui-monospace, Menlo, monospace; font-size: 12px; background: var(--surface-2); border-radius: 6px; padding: 2px 4px; direction: ltr; unicode-bidi: isolate; }\n.rich pre { padding: 8px; overflow-x: auto; }\n.rich table { border-collapse: collapse; font-size: var(--fs-sm); }\n.rich th, .rich td { border: 1px solid var(--line-2); padding: 4px 8px; }\n.rich blockquote { border-inline-start: 3px solid var(--line-2); padding-inline-start: 12px; color: var(--ink-2); margin: 0; }\n.rich.clamp { max-height: 168px; overflow: hidden; mask-image: linear-gradient(#000 60%, transparent); }\n.thread { display: grid; gap: 16px; }\n.comment { display: flex; gap: 10px; align-items: flex-start; }\n.bubble { flex: 1; min-width: 0; background: var(--surface-2); border-radius: 4px var(--r-card) var(--r-card) var(--r-card); padding: 10px 14px; }\n.comment.is-mine .bubble { background: color-mix(in srgb, var(--accent) 7%, var(--surface)); border: 1px solid color-mix(in srgb, var(--accent) 16%, transparent); }\n.c-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: 2px; font-size: var(--fs-xs); }\n.c-head b { font-size: var(--fs-sm); }\n.c-head time { color: var(--ink-3); }\n\n/* composer */\n.composer { flex: none; display: grid; gap: 8px; padding: 12px 16px 16px; border-top: 1px solid var(--line); background: var(--surface); }\n.templates { display: flex; gap: 6px; flex-wrap: wrap; }\n.field { position: relative; }\n.field textarea {\n  display: block; width: 100%; min-height: 84px; max-height: 240px; resize: vertical; padding: 10px 12px;\n  border-radius: var(--r-card); border: 1px solid var(--line-2); background: var(--surface); outline: 0;\n  font-size: var(--fs-md); line-height: 1.8; unicode-bidi: plaintext;\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.mention-pop {\n  position: absolute; inset-inline-start: 8px; bottom: calc(100% + 6px); width: 300px; padding: 6px;\n  background: var(--surface); border: 1px solid var(--line-2); border-radius: var(--r-card); box-shadow: var(--shadow-overlay); z-index: 2;\n}\n.composer-foot { display: flex; align-items: center; gap: 8px; }\n.hint { display: inline-flex; align-items: center; gap: 4px; font-size: var(--fs-xs); }\n\n/* lists used by sheet / dashboard */\n.mini-list { display: grid; }\n.mini-list li {\n  display: flex; align-items: center; gap: 10px; padding: 10px 4px; border-bottom: 1px solid var(--line); cursor: pointer;\n  font-size: var(--fs-sm); border-radius: 6px;\n}\n.mini-list li:hover { background: var(--surface-2); }\n.mini-list li span[dir] { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; text-align: start; }\n.mini-list li small { color: var(--ink-3); font-size: var(--fs-xs); white-space: nowrap; }\n.mini-list.big { overflow-y: auto; padding: 8px 16px 16px; }\n\n/* ---------- following / inbox ---------- */\n.inbox { max-width: 960px; margin: 0 auto; padding: 28px 20px 48px; display: grid; gap: 20px; }\n.inbox-head { display: flex; align-items: flex-end; gap: 16px; }\n.inbox-head h2 { font-size: var(--fs-xl); font-weight: 800; line-height: 1.4; }\n.inbox-head p { font-size: var(--fs-sm); max-width: 560px; }\n.inbox-list { display: grid; gap: 8px; }\n.inbox-item {\n  position: relative; display: flex; gap: 16px; padding: 14px 16px; border-radius: var(--r-card);\n  background: var(--surface); border: 1px solid var(--line); cursor: pointer; transition: all var(--t-fast);\n}\n.inbox-item:hover { border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.inbox-item.has-news { border-color: color-mix(in srgb, var(--brand) 35%, var(--line)); }\n.inbox-item > .news-dot { position: absolute; inset-inline-start: -4px; top: 20px; }\n.ii-main { flex: 1; min-width: 0; display: grid; gap: 6px; }\n.ii-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.ii-main h3 .tag { font-size: 11px; height: 20px; vertical-align: middle; font-weight: 500; }\n.ii-main h3 { font-size: var(--fs-md); font-weight: 700; line-height: 1.6; unicode-bidi: plaintext; text-align: start; }\n.ii-last { display: flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--ink-2); min-width: 0; }\n.ii-last span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; }\n.ii-last b { white-space: nowrap; font-weight: 600; }\n.ii-side { display: grid; justify-items: end; align-content: space-between; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); }\n.inbox .switch { justify-self: start; }\n\n/* empty */\n.empty { display: grid; justify-items: center; gap: 6px; padding: 48px 16px; color: var(--ink-3); text-align: center; }\n.empty b { color: var(--ink); font-size: var(--fs-lg); }\n.empty p { font-size: var(--fs-sm); max-width: 360px; }\n\n/* ---------- dashboard ---------- */\n.dash { max-width: 1400px; margin: 0 auto; padding: 20px 20px 48px; display: grid; gap: 16px; }\n.dash-filters { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: var(--fs-sm); }\n.dash-filters .switch { flex-wrap: wrap; }\n.dash-filters > .muted { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); }\n.loading-note { display: flex; align-items: center; gap: 8px; color: var(--ink-3); }\n.kpis { display: grid; grid-template-columns: minmax(280px, 1fr) 2fr; gap: 12px; }\n.hero {\n  display: grid; gap: 6px; align-content: center; padding: 20px 24px; border-radius: var(--r-panel);\n  background: var(--surface); border: 1px solid var(--line);\n}\n.hero > span { font-size: var(--fs-sm); color: var(--ink-2); font-weight: 600; }\n.hero > b { font-size: var(--fs-hero); font-weight: 800; line-height: 1.15; }\n.hero small { font-size: var(--fs-xs); color: var(--ink-3); }\n.meter { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--s-done) 14%, var(--surface-2)); overflow: hidden; }\n.meter i { display: block; height: 100%; background: var(--s-done); border-radius: 4px; transition: width 600ms var(--ease); }\n.tile-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n.tile {\n  display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 4px 8px; padding: 14px 16px; text-align: start;\n  border-radius: var(--r-panel); background: var(--surface); border: 1px solid var(--line); transition: all var(--t-fast);\n}\n.tile:hover { border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.tile .ic { color: var(--ink-3); }\n.tile span { font-size: var(--fs-sm); color: var(--ink-2); font-weight: 500; }\n.tile b { grid-column: 1 / -1; font-size: var(--fs-xl); font-weight: 800; line-height: 1.3; }\n.dash-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n.viz-card {\n  display: flex; flex-direction: column; gap: 12px; padding: 16px 18px 18px; min-width: 0;\n  background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel);\n}\n.viz-card.wide { grid-column: span 2; }\n.viz-card.tall { grid-row: span 2; }\n.viz-card.full { grid-column: 1 / -1; }\n.viz-body { grid-template-columns: minmax(0, 1fr); }\n.mini-list { grid-template-columns: minmax(0, 1fr); }\n\n/* delayed table */\n.dtable-wrap { overflow-x: auto; margin-inline: -4px; }\n.dtable { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-sm); }\n.dtable th { text-align: start; font-size: var(--fs-xs); font-weight: 600; color: var(--ink-3); padding: 0 8px 8px; border-bottom: 1px solid var(--line-2); white-space: nowrap; }\n.dtable td { padding: 10px 8px; border-bottom: 1px solid var(--line); vertical-align: middle; white-space: nowrap; }\n.dtable tbody tr { cursor: pointer; transition: background var(--t-fast); }\n.dtable tbody tr:hover { background: var(--surface-2); }\n.dtable tbody tr:last-child td { border-bottom: 0; }\n.dtable .dt-title { white-space: normal; width: 44%; min-width: 280px; }\n.dtable .dt-title > span { display: block; font-weight: 600; line-height: 1.6; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 560px; }\n.dtable .dt-title small { display: flex; align-items: center; gap: 4px; margin-top: 2px; }\n.dtable .dt-title small .tag { height: 20px; font-size: 11px; margin: 0; }\n.dtable .dt-fn { color: var(--ink-2); max-width: 200px; overflow: hidden; text-overflow: ellipsis; }\n.dtable .tag { margin: 0; }\n.viz-card .more { margin-top: 4px; }\n.viz-card > header { display: flex; align-items: flex-start; gap: 8px; }\n.viz-card > header > div { flex: 1; }\n.viz-card h3 { font-size: var(--fs-lg); font-weight: 700; line-height: 1.4; }\n.viz-card header p { font-size: var(--fs-xs); color: var(--ink-3); }\n.viz-body { flex: 1; min-height: 0; display: grid; gap: 12px; align-content: start; }\n.viz-table { display: none; overflow: auto; max-height: 420px; }\n.viz-card.show-table .viz-table { display: block; }\n.viz-card.show-table .viz-plot, .viz-card.show-table .hbars, .viz-card.show-table .donut-wrap, .viz-card.show-table .legend { display: none; }\n.viz-table table { width: 100%; border-collapse: collapse; font-size: var(--fs-xs); }\n.viz-table th, .viz-table td { padding: 6px 8px; border-bottom: 1px solid var(--line); text-align: start; white-space: nowrap; }\n.viz-table th { color: var(--ink-3); font-weight: 600; position: sticky; top: 0; background: var(--surface); }\n.skel-card { min-height: 280px; background: linear-gradient(90deg, var(--surface), var(--surface-2), var(--surface)); background-size: 200% 100%; animation: shimmer 1.4s infinite; }\n\n/* legend */\n.legend { display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: var(--fs-xs); color: var(--ink-2); }\n.legend-item { display: inline-flex; align-items: center; gap: 6px; }\n.legend-item b { color: var(--ink-3); font-weight: 600; }\n.sw { display: inline-block; width: 10px; height: 10px; border-radius: 3px; flex: none; }\n\n/* stacked columns (HTML) */\n.viz-plot { position: relative; height: 260px; padding-inline-start: 36px; padding-bottom: 40px; }\n.viz-plot.compact { height: 200px; }\n.grid { position: absolute; inset: 0 0 40px 0; inset-inline-start: 36px; pointer-events: none; }\n.grid-line { position: absolute; inset-inline: 0; border-top: 1px solid var(--grid); }\n.grid-line:first-child { border-top-color: var(--baseline); }\n.grid-line span { position: absolute; inset-inline-start: -36px; width: 30px; transform: translateY(-50%); text-align: end; font-size: 11px; color: var(--ink-3); font-variant-numeric: tabular-nums; }\n.cols { position: relative; display: flex; height: 100%; }\n.col { flex: 1; display: flex; flex-direction: column; align-items: center; min-width: 0; height: 100%; }\n.col-plot { position: relative; flex: 1; width: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }\n.col-bar { width: 24px; display: flex; flex-direction: column-reverse; gap: 2px; min-height: 0; transition: height 500ms var(--ease); }\n.col-bar .seg { display: block; width: 100%; min-height: 2px; transition: filter var(--t-fast), opacity var(--t-fast); }\n.col-bar .seg:last-child { border-radius: 4px 4px 0 0; }\n.col-val { font-size: var(--fs-xs); font-weight: 700; color: var(--ink); margin-bottom: 4px; }\n.col-label { position: absolute; top: 100%; inset-inline: 0; height: 40px; padding-top: 6px; display: grid; justify-items: center; align-content: start; line-height: 1.35; font-size: var(--fs-xs); color: var(--ink-2); text-align: center; white-space: nowrap; }\n.col { position: relative; }\n.col-label small { color: var(--ink-3); font-size: 11px; }\n.col.is-current .col-label { color: var(--ink); font-weight: 700; }\n.col.is-current .col-label::before { content: \"\"; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); position: absolute; top: -1px; }\n.cols:hover .seg { opacity: .55; }\n.cols .col:hover .seg { opacity: 1; }\n.seg:hover { filter: brightness(1.08); }\n\n/* donut */\n.donut-wrap { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }\n.donut { width: 168px; height: 168px; flex: none; }\n.donut .arc { cursor: pointer; transition: stroke-width var(--t-fast) var(--ease); outline: none; }\n.donut .arc:hover, .donut .arc:focus { stroke-width: 17; }\n.donut-num { font: 800 22px var(--font); fill: var(--ink); }\n.donut-cap { font: 500 9px var(--font); fill: var(--ink-3); }\n.donut-legend { flex: 1; display: grid; gap: 2px; min-width: 180px; }\n.donut-legend button { display: flex; align-items: center; gap: 8px; width: 100%; padding: 4px 6px; border-radius: 6px; font-size: var(--fs-sm); color: var(--ink-2); }\n.donut-legend button:hover { background: var(--surface-2); color: var(--ink); }\n.donut-legend span { flex: 1; text-align: start; }\n.donut-legend b { color: var(--ink); font-weight: 700; }\n.donut-legend em { font-style: normal; font-size: var(--fs-xs); color: var(--ink-3); min-width: 36px; text-align: end; }\n\n/* horizontal stacked bars */\n.hbars { display: grid; gap: 10px; }\n.hrow { display: grid; grid-template-columns: minmax(96px, 34%) 1fr auto; align-items: center; gap: 10px; }\n.hrow-label { display: flex; align-items: center; gap: 6px; min-width: 0; font-size: var(--fs-sm); color: var(--ink-2); }\n.hrow-label span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.hrow-track { height: 14px; }\n.hrow-bar { display: flex; gap: 2px; height: 100%; min-width: 2px; transition: width 500ms var(--ease); }\n.hrow-bar .seg { height: 100%; min-width: 2px; }\n.hrow-bar .seg:last-child { border-start-end-radius: 0; border-radius: 4px 0 0 4px; }\n.hrow-val { display: grid; justify-items: end; line-height: 1.25; min-width: 64px; }\n.hrow-val b { font-size: var(--fs-sm); }\n.hrow-val small { font-size: 11px; color: var(--ink-3); }\n.hbars:hover .seg { opacity: .55; }\n.hbars .hrow:hover .seg { opacity: 1; }\n\n/* tooltip */\n.tooltip {\n  position: fixed; top: 0; left: 0; z-index: 50; pointer-events: none; max-width: 280px;\n  padding: 8px 10px; border-radius: 10px; background: var(--ink); color: var(--surface);\n  font-size: var(--fs-xs); line-height: 1.6; box-shadow: var(--shadow-overlay); display: grid; gap: 2px;\n}\n.tooltip.is-hint { padding: 4px 8px; }\n.tooltip b { font-size: var(--fs-sm); margin-bottom: 2px; }\n.tt-row { display: flex; align-items: center; gap: 6px; }\n.tt-row i { width: 8px; height: 8px; border-radius: 2px; flex: none; }\n.tt-row em { font-style: normal; font-weight: 700; margin-inline-start: auto; padding-inline-start: 12px; }\n\n/* toasts */\n.toasts { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 60; display: grid; gap: 8px; justify-items: center; }\n.toast {\n  display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 8px 10px 8px 16px; border-radius: 12px;\n  background: var(--ink); color: var(--surface); font-size: var(--fs-sm); box-shadow: var(--shadow-overlay);\n  animation: toast-in var(--t) var(--ease); transition: opacity var(--t), transform var(--t);\n}\n.toast .btn-ghost { color: var(--surface); background: rgba(255,255,255,.12); }\n.toast .btn-ghost:hover { background: rgba(255,255,255,.2); }\n.app[data-theme=\"dark\"] .toast .btn-ghost { color: var(--surface); background: rgba(0,0,0,.08); }\n.toast-error .ic { color: #ff8a80; }\n.toast-ok .ic { color: #5fd38a; }\n.app[data-theme=\"dark\"] .toast-error .ic { color: var(--danger); }\n.app[data-theme=\"dark\"] .toast-ok .ic { color: var(--ok-ink); }\n.toast.out { opacity: 0; transform: translateY(8px); }\n@keyframes toast-in { from { opacity: 0; transform: translateY(8px); } }\n\n/* ---------- launcher (lives outside .app) ---------- */\n.launcher {\n  position: fixed; bottom: 20px; right: 20px; z-index: 2147483000;\n  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px 0 16px; border: 0; border-radius: 999px;\n  background: #141413; color: #fcfcfb; cursor: pointer;\n  font: 600 14px/1 \"SFR Vazirmatn\", Vazirmatn, Tahoma, sans-serif; letter-spacing: 0;\n  box-shadow: 0 8px 24px rgba(20, 20, 19, .28), 0 0 0 1px rgba(255,255,255,.06) inset;\n  transition: transform 160ms cubic-bezier(.2,0,0,1);\n}\n.launcher:hover { transform: translateY(-2px); }\n.launcher:active { transform: scale(.98); }\n.launcher .ic { color: #ef0d8a; }\n.launcher kbd { font: 500 11px/1 \"SFR Vazirmatn\", sans-serif; color: rgba(252,252,251,.6); border: 1px solid rgba(255,255,255,.18); border-radius: 4px; padding: 3px 4px; background: transparent; }\n.launcher[hidden] { display: none; }\n.launcher:focus-visible { outline: 2px solid #3987e5; outline-offset: 2px; }\n\n/* ---------- responsive ---------- */\n@media (max-width: 1180px) {\n  .dash-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .kpis { grid-template-columns: 1fr; }\n}\n@media (max-width: 860px) {\n  .tabs button { padding: 0 8px; }\n  .brand-text, .top-actions .btn span, .sync { display: none; }\n  .dash-grid { grid-template-columns: 1fr; }\n  .viz-card.wide { grid-column: auto; }\n  .tile-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .search { min-width: 0; flex: 1 1 100%; }\n  .facts { grid-template-columns: 1fr; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .app *, .app *::before, .app *::after { animation: none !important; transition: none !important; }\n}\n@media (forced-colors: active) {\n  .seg, .sw, .col-dist i, .pill .dot { forced-color-adjust: none; }\n}\n" };
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
 "at-sign": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\" /></svg>",
 "bell-dot": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.268 21a2 2 0 0 0 3.464 0\" /><path d=\"M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348\" /><circle cx=\"18\" cy=\"5\" r=\"3\" /></svg>",
 "calendar": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M8 2v3\" /><path d=\"M16 2v3\" /><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" /><path d=\"M3 9h18\" /></svg>",
 "chart-column": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M18 17V9\" /><path d=\"M13 17V5\" /><path d=\"M8 17v-3\" /></svg>",
 "chart-pie": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\" /><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\" /></svg>",
 "check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20 6 9 17l-5-5\" /></svg>",
 "check-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M18 6 7 17l-5-5\" /><path d=\"m22 10-7.5 7.5L13 16\" /></svg>",
 "chevron-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m6 9 6 6 6-6\" /></svg>",
 "chevron-left": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m15 18-6-6 6-6\" /></svg>",
 "circle-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m16 9-5.5 5.5L8 12\" /></svg>",
 "circle-dashed": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\" /><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\" /><path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\" /><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\" /><path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\" /><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\" /><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\" /><path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\" /></svg>",
 "clock": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 6v6l4 2\" /></svg>",
 "external-link": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" /></svg>",
 "eye": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /></svg>",
 "eye-off": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" /><path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" /><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" /><path d=\"m2 2 20 20\" /></svg>",
 "file-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" /><path d=\"M14 2v5a1 1 0 0 0 1 1h5\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" /></svg>",
 "inbox": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\" /><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" /></svg>",
 "info": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" /></svg>",
 "kanban": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M5 3v14\" /><path d=\"M12 3v8\" /><path d=\"M19 3v18\" /></svg>",
 "key": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m2 21 9.6-9.6\" /><path d=\"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19\" /><circle cx=\"15.5\" cy=\"7.5\" r=\"5.5\" /></svg>",
 "layers": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\" /><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\" /><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\" /></svg>",
 "link": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" /></svg>",
 "list-filter": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M2 5h20\" /><path d=\"M6 12h12\" /><path d=\"M9 19h6\" /></svg>",
 "log-out": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m16 17 5-5-5-5\" /><path d=\"M21 12H9\" /><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /></svg>",
 "message-square": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" /></svg>",
 "monitor": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" /><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" /><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" /></svg>",
 "moon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" /></svg>",
 "move": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 2v20\" /><path d=\"m15 19-3 3-3-3\" /><path d=\"m19 9 3 3-3 3\" /><path d=\"M2 12h20\" /><path d=\"m5 9-3 3 3 3\" /><path d=\"m9 5 3-3 3 3\" /></svg>",
 "refresh-cw": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /><path d=\"M21 3v5h-5\" /><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /><path d=\"M8 16H3v5\" /></svg>",
 "rotate-ccw": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /></svg>",
 "scroll": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" /></svg>",
 "search": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m21 21-4.34-4.34\" /><circle cx=\"11\" cy=\"11\" r=\"8\" /></svg>",
 "send": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" /></svg>",
 "sparkles": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" /><path d=\"M20 2v4\" /><path d=\"M22 4h-4\" /><circle cx=\"4\" cy=\"20\" r=\"2\" /></svg>",
 "square-kanban": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M8 7v7\" /><path d=\"M12 7v4\" /><path d=\"M16 7v9\" /></svg>",
 "star": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" /></svg>",
 "summary": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 4H7\" /><path d=\"m18 16 3 3-3 3\" /><path d=\"M3 4v13a2 2 0 0 0 2 2h16\" /><path d=\"M7 14h7\" /><path d=\"M7 9h12\" /></svg>",
 "sun": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" /></svg>",
 "table": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 3v18\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M3 9h18\" /><path d=\"M3 15h18\" /></svg>",
 "table-2": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 9h18\" /><path d=\"M9 3v18\" /><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" /></svg>",
 "target": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><circle cx=\"12\" cy=\"12\" r=\"6\" /><circle cx=\"12\" cy=\"12\" r=\"2\" /></svg>",
 "triangle-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /><path d=\"M12 9v4\" /><path d=\"M12 17h.01\" /></svg>",
 "user": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" /></svg>",
 "users": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><path d=\"M16 3.128a4 4 0 0 1 0 7.744\" /><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /></svg>",
 "view": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2\" /><path d=\"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2\" /><circle cx=\"12\" cy=\"12\" r=\"1\" /><path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\" /></svg>",
 "x": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" /></svg>"
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
    dash: { cycle: '', fn: '', hideCanceled: true },
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

  /** Board issues after client-side filters, merged with REST enrichment. */
  SFR.visibleIssues = () => {
    const u = S.ui;
    const q = SFR.norm(u.search);
    return S.board
      .map((b) => {
        const r = S.rest.get(b.key);
        return r ? { ...r, ...b, poc: r.poc || b.assignee, status: r.status || b.status } : { ...b, poc: b.assignee };
      })
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
  function stackedColumns({ cats, series, data, drill = 'month' }) {
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
        const tt = tip(`${c.label} — ${fa(t)} اینیشیتیو`, segs.map((x) => ({ label: x.s.label, value: fa(x.v), color: color(x.s) })));
        return `<div class="col${c.current ? ' is-current' : ''}" data-tip="${tt}">
          <div class="col-plot">
            ${ci === peak || c.current ? `<span class="col-val">${fa(t)}</span>` : ''}
            <div class="col-bar" style="height:${(t / max) * 100}%">
              ${segs
                .map(
                  (x) =>
                    `<button class="seg" style="flex:${x.v};background:${color(x.s)}" data-drill="${esc(JSON.stringify({ [drill]: c.key, status: x.s.key }))}" aria-label="${esc(
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
          <div class="col-bar" style="height:${(i.value / max) * 100}%"><button class="seg" style="flex:1;background:var(--s-${colorKey})"
            data-drill="${esc(JSON.stringify({ [drillKey]: i.key }))}" data-tip="${tip(i.label, [{ label: 'تعداد', value: fa(i.value) }])}" aria-label="${esc(`${i.label}: ${fa(i.value)}`)}"></button></div></div>
          <div class="col-label">${esc(i.label)}</div></div>`
      )
      .join('')}</div></div>${table(['دسته', 'تعداد'], items.map((i) => [i.label, i.value]))}`;
  }

  SFR.charts = { stackedColumns, donut, hStacked, columns, legend };
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
      : `<span class="av av-${size}" title="${esc(p.display || p.name)}">${esc(SFR.initials(p.display || p.name))}</span>`;
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
    if (it)
      SFR.patch(key, {
        commentCount: (it.commentCount || 0) + 1,
        lastComment: { author: S.me.name, authorName: S.me.display, avatar: S.me.avatar, created: c.created, body },
      });
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
  function card(i) {
    const news = SFR.hasNews(i);
    const epic = i.epic || i.battle || '';
    const t = SFR.splitTitle(i.summary);
    return `<article class="card st-${i.status}${news ? ' has-news' : ''}" draggable="true" data-key="${esc(i.key)}" tabindex="0" aria-label="${esc(`${i.key} ${i.summary}`)}">
      <div class="card-top">
        ${SFR.statusPill(i.status, { short: true })}
        ${i.delayed ? `<span class="pill pill-late">${icon('clock', 12)}تأخیر</span>` : ''}
        <span class="grow"></span>
        ${SFR.keyChip(i.key)}
        <button class="star${i.watching ? ' is-on' : ''}" data-act="follow" data-key="${esc(i.key)}" aria-pressed="${!!i.watching}" aria-label="${i.watching ? 'لغو دنبال کردن' : 'دنبال کردن'}">${icon('star', 16)}</button>
      </div>
      <h3 class="card-title" dir="auto">${esc(t.title)}</h3>
      ${t.tags.length ? `<div class="card-tags">${t.tags.slice(0, 3).map((x) => `<bdi dir="auto">${esc(x)}</bdi>`).join('')}</div>` : ''}
      ${epic ? `<div class="card-epic" dir="auto">${icon('layers', 12)}<span>${esc(epic)}</span></div>` : ''}
      <div class="card-foot">
        ${SFR.avatar(i.poc, 'xs')}<span class="owner">${esc(SFR.firstName(i.poc?.display) || 'بدون مسئول')}</span>
        ${i.size && i.size !== 'N/A' ? `<span class="size">${esc(i.size)}</span>` : ''}
        <span class="grow"></span>
        ${i.commentCount ? `<span class="meta${news ? ' is-new' : ''}">${icon('message-square', 14)}${fa(i.commentCount)}</span>` : ''}
        ${news ? `<span class="news-dot" aria-label="دیدگاه تازه"></span>` : ''}
      </div>
    </article>`;
  }

  function column(col, items) {
    const [title, sub] = SFR.monthLabel(col.name);
    const isBacklog = SFR.monthKey(col.name) === 'backlog';
    const current = SFR.isCurrentMonth(col.name);
    const limit = S.ui.colLimit[col.id] || PAGE;
    const dist = SFR.STATUS.map((s) => ({ s, n: items.filter((i) => i.status === s.key).length })).filter((x) => x.n);
    const done = items.filter((i) => i.status === 'done' || i.status === 'devdone').length;

    if (isBacklog && S.ui.hideBacklog)
      return `<button class="column rail" data-act="toggle-backlog" aria-label="نمایش بک‌لاگ">${icon('chevron-left', 16)}<span>${title}</span><b>${fa(items.length)}</b></button>`;

    return `<section class="column${current ? ' is-current' : ''}${isBacklog ? ' is-backlog' : ''}" data-col="${col.id}" aria-label="${esc(title)}">
      <header class="col-head">
        <div class="col-title"><b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}${current ? '<span class="now">این ماه</span>' : ''}<span class="grow"></span>${SFR.count(items.length)}</div>
        ${
          items.length
            ? `<div class="col-dist" data-tip="${esc(
                `<b>${esc(title)}</b>` + dist.map((x) => `<span class="tt-row"><i style="background:var(--s-${x.s.key})"></i>${x.s.label}<em>${fa(x.n)}</em></span>`).join('')
              )}">${dist.map((x) => `<i style="flex:${x.n};background:var(--s-${x.s.key})"></i>`).join('')}</div>
               ${!isBacklog ? `<div class="col-done">${fa(done)} از ${fa(items.length)} تحویل‌شده</div>` : ''}`
            : '<div class="col-dist is-none"></div>'
        }
      </header>
      <div class="col-body" data-drop="${col.id}">
        ${items.length ? items.slice(0, limit).map(card).join('') : `<div class="col-empty">${icon('inbox', 20)}موردی نیست</div>`}
        ${items.length > limit ? `<button class="more" data-act="more" data-col="${col.id}">نمایش ${fa(Math.min(PAGE, items.length - limit))} مورد دیگر · ${fa(items.length - limit)} باقی‌مانده</button>` : ''}
      </div>
    </section>`;
  }

  function kanban(visible) {
    const by = {};
    S.columns.forEach((c) => (by[c.id] = []));
    visible.forEach((i) => by[S.colOfStatus[i.statusId]]?.push(i));
    return `<div class="kanban" data-scroll="kanban">${S.columns.map((c) => column(c, by[c.id])).join('')}</div>`;
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
            <td>${esc(i.size && i.size !== 'N/A' ? i.size : '—')}</td>
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
          ${fact('سایز', it.size && it.size !== 'N/A' ? `<span class="size">${esc(it.size)}</span>` : '')}
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
                return `<li class="inbox-item${news ? ' has-news' : ''}" data-key="${esc(i.key)}" tabindex="0">
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
  const backlogCol = () => S.columns.find((c) => SFR.monthKey(c.name) === 'backlog')?.id;

  function matches(i, f) {
    if (f.status && i.status !== f.status) return false;
    if (f.month && colOf(i) !== f.month) return false;
    if (f.fn && !i.fn.includes(f.fn)) return false;
    if (f.strategic !== undefined && (i.strategic || '—') !== f.strategic) return false;
    if (f.poc && (i.poc?.name || '—') !== f.poc) return false;
    if (f.size && (i.size && i.size !== 'N/A' ? i.size : '—') !== f.size) return false;
    if (f.delayed && !i.delayed) return false;
    if (f.picked && colOf(i) === backlogCol()) return false;
    return true;
  }

  const card = (id, title, sub, body, { wide = false, tall = false, full = false, noTable = false } = {}) =>
    `<section class="viz-card${wide ? ' wide' : ''}${tall ? ' tall' : ''}${full ? ' full' : ''}" data-card="${id}">
      <header><div><h3>${title}</h3>${sub ? `<p>${sub}</p>` : ''}</div>
        ${noTable ? '' : `<button class="icon-btn" data-act="toggle-table" data-hint="نمایش جدول" aria-label="نمایش جدول داده">${icon('table-2', 16)}</button>`}</header>
      <div class="viz-body">${body}</div>
    </section>`;

  function tiles(rows) {
    const bl = backlogCol();
    const picked = rows.filter((i) => colOf(i) !== bl);
    const live = picked.filter((i) => i.status !== 'canceled');
    const done = live.filter(isDone).length;
    const rate = live.length ? (done / live.length) * 100 : 0;
    const t = (label, value, f, hint, ic) =>
      `<button class="tile" data-drill="${esc(JSON.stringify(f))}" data-hint="${esc(hint)}">${icon(ic, 16)}<span>${label}</span><b>${fa(value)}</b></button>`;
    return `<div class="kpis">
      <div class="hero">
        <span>نرخ تحویل اینیشیتیوهای برنامه‌ریزی‌شده</span>
        <b>${faPct(rate)}</b>
        <div class="meter" role="meter" aria-valuenow="${Math.round(rate)}" aria-valuemin="0" aria-valuemax="100"><i style="width:${rate}%"></i></div>
        <small>${fa(done)} از ${fa(live.length)} اینیشیتیوی ماه‌دار (بدون لغوشده‌ها) انجام یا توسعه‌اش تمام شده</small>
      </div>
      <div class="tile-grid">
        ${t('کل اینیشیتیوها', rows.length, {}, 'همه‌ی موارد این نما', 'layers')}
        ${t('ماه‌دار (Picked)', picked.length, { picked: true }, 'مواردی که ماه تحویل دارند', 'calendar')}
        ${t('در جریان', rows.filter((i) => i.status === 'progress').length, { status: 'progress' }, 'در حال انجام', 'circle-dashed')}
        ${t('معلق', rows.filter((i) => i.status === 'pending').length, { status: 'pending' }, 'معلق یا منتظر', 'clock')}
        ${t('تأخیری', rows.filter((i) => i.delayed).length, { delayed: true }, 'برچسب Delayed دارند', 'triangle-alert')}
        ${t('انجام‌شده', rows.filter((i) => i.status === 'done').length, { status: 'done' }, 'به تولید رسیده', 'circle-check')}
      </div>
    </div>`;
  }

  function byMonth(rows) {
    const cats = S.columns
      .filter((c) => SFR.monthKey(c.name) !== 'backlog')
      .map((c) => {
        const [label, sub] = SFR.monthLabel(c.name);
        return { key: c.id, label, sub: sub.split(' ← ')[0], current: SFR.isCurrentMonth(c.name) };
      });
    const data = {};
    rows.forEach((i) => {
      const c = colOf(i);
      if (!c) return;
      (data[c] ||= {})[i.status] = (data[c][i.status] || 0) + 1;
    });
    return charts.stackedColumns({ cats, series: SERIES.filter((s) => !(S.dash.hideCanceled && s.key === 'canceled')), data, drill: 'month' });
  }

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
    const series = SERIES.filter((s) => !(d.hideCanceled && s.key === 'canceled'));
    const fnRows = groupRows(rows, (i) => (i.fn.length ? i.fn : ['نامشخص']));
    const pocRows = groupRows(rows, (i) => i.poc?.name || '—', {
      labelFn: (k) => (k === '—' ? 'بدون مسئول' : [...S.rest.values()].find((x) => x.poc?.name === k)?.poc.display || k),
      avatarFn: (i) => i.poc?.avatar,
      top: 12,
    });
    const stratRows = groupRows(rows, (i) => i.strategic || '—', { labelFn: (k) => (k === '—' ? 'تعیین‌نشده' : SFR.STRATEGIC[k] || k) });
    const statusItems = SFR.STATUS.filter((s) => !(d.hideCanceled && s.key === 'canceled')).map((s) => ({ key: s.key, label: s.label, value: rows.filter((i) => i.status === s.key).length }));
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '—'].map((k) => ({ key: k, label: k === '—' ? 'بی‌سایز' : k, value: rows.filter((i) => (i.size && i.size !== 'N/A' ? i.size : '—') === k).length }));
    const monthRank = (i) => {
      const idx = S.columns.findIndex((c) => c.id === colOf(i));
      return colOf(i) === backlogCol() || idx < 0 ? 999 : idx;
    };
    // Still-open delays first (they need attention), then by delivery month.
    const delayed = rows
      .filter((i) => i.delayed)
      .sort((a, b) => isDone(a) - isDone(b) || monthRank(a) - monthRank(b) || new Date(b.updated) - new Date(a.updated));

    el.innerHTML = `<div class="dash">
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
      ${tiles(rows)}
      <div class="dash-grid">
        ${card('month', 'تحویل ماه‌به‌ماه', 'هر ستون یک ماه تحویل؛ رنگ‌ها وضعیت اینیشیتیوها', byMonth(rows), { wide: true })}
        ${card('status', 'ترکیب وضعیت', 'سهم هر وضعیت از کل', charts.donut({ items: statusItems, center: { value: rows.length, label: 'اینیشیتیو' } }))}
        ${card('size', 'سایز تسک‌ها', 'توزیع برآورد اندازه', charts.columns({ items: sizes, drillKey: 'size' }))}
        ${card('fn', 'پیشرفت فانکشن‌ها', 'تعداد و درصد تحویل هر فانکشن', charts.hStacked({ rows: fnRows, series, drillKey: 'fn' }), { tall: true })}
        ${card('poc', 'بار کاری مسئول‌ها', 'دوازده Product PoC با بیشترین اینیشیتیو', charts.hStacked({ rows: pocRows, series, drillKey: 'poc' }), { tall: true })}
        ${card('strategic', 'نوع استراتژیک', 'Make or Fail، شتاب‌دهنده، کاهش ریسک', charts.hStacked({ rows: stratRows, series, drillKey: 'strategic' }))}
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
  };

  /* ---------- drill-down sheet ---------- */
  SFR.openDrill = (f) => {
    const rows = dataset().filter((i) => matches(i, f));
    const parts = [];
    if (f.month) parts.push(SFR.monthLabel(S.columns.find((c) => c.id === f.month)?.name)[0]);
    if (f.status) parts.push(SFR.statusMeta(f.status).label);
    if (f.fn) parts.push(f.fn);
    if (f.poc) parts.push(rows[0]?.poc?.display || 'بدون مسئول');
    if (f.strategic) parts.push(SFR.STRATEGIC[f.strategic] || (f.strategic === '—' ? 'تعیین‌نشده' : f.strategic));
    if (f.size) parts.push(`سایز ${f.size}`);
    if (f.delayed) parts.push('تأخیری');
    if (f.picked) parts.push('ماه‌دار');
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
          <span class="me">${SFR.avatar(S.me, 'md')}</span>
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
    renderState();
    if (S.cfg) {
      app.querySelector('.brand-text small').textContent = S.cfg.name;
      const me = app.querySelector('.me');
      if (S.me && !me.dataset.done) (me.innerHTML = SFR.avatar(S.me, 'md')), (me.dataset.done = 1);
    }
    app.querySelectorAll('[data-act="tab"]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.v === S.ui.tab)));
    app.querySelectorAll('.view').forEach((v) => (v.hidden = v.dataset.view !== S.ui.tab || S.status !== 'ready'));
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
      if (!pop.hidden && !pop.contains(e.target) && !e.target.closest('[data-act="open-filters"],[data-act="open-people"]')) closePopover();
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
