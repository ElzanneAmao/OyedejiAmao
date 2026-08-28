# Photos for the About page

All five are in place: `family.jpg`, `athens.jpg`, `cdwm-dinner.jpg`,
`cdwm-win.jpg` in the "Outside of work" strip, and `portrait.jpg` as the
sticky headshot at the top of the page.

Each was cropped to its frame's aspect ratio by hand (the two Come Dine
With Me photos and the portrait needed an off-centre crop to keep the
right people/face in frame) and resized to a sane web weight — long edge
capped at 1400px for the strip, 1200px for the portrait, JPEG q82. Total
folder weight is under 1MB; the originals were 37MB combined.

If a photo is ever swapped, match the frame's ratio before dropping in a
replacement: 4:5 for the strip photos, 3:4 for the portrait. Both fall
back to a placeholder SVG via `onerror` if the file is ever missing, so a
bad path degrades gracefully instead of showing a broken image icon.
