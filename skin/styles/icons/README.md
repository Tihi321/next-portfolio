# ICONS

All icons are generated via Icomoon app and are used as font icons
https://icomoon.io/

## How to use
* Import `selection.json` from `fonts folder`.
* Make changes and download
* Add css classes to `_class-names.scss` and change ex. `.icon--refresh:before` to `.icon--refresh::before`.
* Add variable names to `_variables.scss` and change double quotes to no quotes (example: `$icon--refresh: \e912;`).
* Add `selection.json` and all font files to `fonts` folder.
* Recompile assets via webpack (`npm start` does this among other things)

## Troubleshooting
* If new icon isn't showing (empty square), it might be cached that way. Try refreshing the page with dev tools open 
