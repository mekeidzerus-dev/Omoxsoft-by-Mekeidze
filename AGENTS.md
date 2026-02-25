# AGENTS.md

## Cursor Cloud specific instructions

This is a **zero-dependency static portfolio website** (vanilla HTML/CSS/JS). No package manager, no build step, no backend.

### Running the dev server

```bash
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/` in a browser.

### Key pages

- **Main portfolio**: `/index.html`
- **Password generator tool**: `/tools/password/index.html`

### Notes

- There is no `package.json`, no linter, no test framework, and no build system. The HTML/CSS/JS files are served as-is.
- The `i18n` system (`js/i18n.js`) supports Russian and Italian via `data-i18n` attributes and a toggle button.
- Deployment is via GitHub Actions FTP (`deploy.yml`) — requires FTP secrets configured in GitHub.
- Image paths may contain spaces (e.g., `img/cal 2.webp`); handle with care.
