ALEXEI PISTOUN PORTFOLIO — FLAT TEST BUILD

This version fixes the broken Power Fist / pumpkin images and videos by putting
EVERY new media file directly in the repository root. There are no images/ or
videos/ folders to upload.

WHY THE LAST TEST BROKE:
The HTML uploaded successfully, but the nested media folders were apparently not
present in the GitHub repository. The browser therefore found the page but not
the files referenced by paths such as:
    images/power-fist/power-fist-cover.jpg
    videos/power-fist/power-fist-test.mp4

THIS BUILD INSTEAD USES:
    power-fist-cover.jpg
    power-fist-cad.jpg
    power-fist-test.mp4
    pumpkins-cover.jpg
    laser-engraving-process.mp4
...all directly at the repo root.

UPLOAD TO GITHUB:
1. Extract this ZIP on your computer.
2. Open the extracted folder.
3. Select ALL files inside it.
4. GitHub repo -> Add file -> Upload files.
5. Drag all selected files into the upload area.
6. Let GitHub replace matching HTML/CSS/CNAME files.
7. Commit the changes.
8. Keep your existing DSC_0409.jpg and "woofwatch image.png" in the repo.
9. Wait about 1 minute for GitHub Pages to redeploy, then hard refresh with
   Ctrl+Shift+R.

Do NOT upload only the ZIP file itself.

This is still a test build; we can resume adding projects and media later.
