# SteakyBone Launch Planner

A zero-dependency static web app for managing the SteakyBone Amazon launch timeline.

## Features

- Editable Gantt-style timeline
- Add, edit, delete, filter, and search tasks
- Task status, owner, category, priority, and notes
- Local browser persistence with `localStorage`
- Import/export the whole plan as JSON
- Responsive layout
- No backend required
- Works on GitHub Pages

## Run locally

Open `index.html` in your browser.

For a cleaner local setup, you can also run a simple static server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `steakybone-launch-planner`.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub will give you the public site URL.

## Data behavior

The app stores edits in the browser's `localStorage`. That means changes persist on that browser/device, but they do not automatically sync between devices.

Use **Export JSON** to back up your plan or move it to another device. Use **Import JSON** to restore it.

## Files

- `index.html` — app structure
- `styles.css` — styling
- `app.js` — tasks, editing, Gantt rendering, local storage, import/export


## Sep 22, 2026 update
- Packaging samples marked received.
- Packaging inspection/thickness confirmation moved to the current critical path.
- Bulk packaging and FBA dates shifted to reflect approval on Sep 23.
- Amazon buyable target updated to Oct 14–18.
- The app automatically migrates an existing browser-saved plan once, so your prior edits are preserved while these specific launch dates/statuses are updated.
- Added a Today marker and a live countdown to the Amazon target window.
