# Photos for the About page

Drop these JPEGs here with the exact filenames below. Until a file exists,
the page falls back to the shared placeholder automatically, so it's safe
to add them one at a time.

| Filename            | Photo                                          |
|---------------------|-------------------------------------------------|
| `family.jpg`        | With his wife and child (child not identifiable) |
| `athens.jpg`         | Panathenaic Stadium, Athens                      |
| `cdwm-dinner.jpg`    | Come Dine With Me, the table                     |
| `cdwm-win.jpg`       | Come Dine With Me, the win                       |

**Format:** JPEG, portrait or square, at least 960px on the short edge.
Frames crop to 4:5 from the centre, so keep faces near the middle and
leave a little room at the edges — group or landscape shots may need
`object-position` nudged in `.photo-frame img` if the crop lands wrong.

To change a caption, edit `about.html` and search for `photo-caption`.

## Portrait

`assets/portrait-placeholder.svg` is still the sticky headshot at the top
of the About page. If a proper headshot becomes available, save it as
`assets/portrait.jpg` and update the `<img src>` in the `.portrait-card`
figure in `about.html` (it currently points at the placeholder SVG
directly, not via onerror fallback).
