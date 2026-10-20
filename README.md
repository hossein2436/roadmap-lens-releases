# Roadmap Lens — releases

Signed builds of the Roadmap Lens Chrome extension, published automatically from a private source repo.

- `latest.json` — newest build number, SHA-256 and ECDSA P-256 signature. The extension only installs bundles whose signature matches the public key it ships with.
- `lens-<build>.js` — the app bundle.
- `roadmap-lens-extension.zip` — the extension to install once (Chrome → `chrome://extensions` → Developer mode → Load unpacked).

نصب: فایل `roadmap-lens-extension.zip` را دانلود و باز کنید، در `chrome://extensions` حالت Developer را روشن کنید و با «Load unpacked» پوشه را انتخاب کنید. از آن به بعد نسخه‌های تازه خودکار می‌رسند.
