OborPaste, a simple pastebin you can run on any server with Apache and PHP.

## Installation

Rename `_htaccess` to `.htaccess`. Replace the placeholder URLs and file paths in `.htaccess`, `textfiles.html`, and `textfiles.php` to appropriate values; replace the placeholder API key in `textfiles.php` with an arbitrary key of your choice (this can be any string you like, but don’t share it with anyone). Put everything in `/textfiles/` (where `/` is your web root).

## Usage

Post textfiles by sending a POST request to `/textfiles/textfiles.php`, with two parameters: `f` (whose value should be the contents of the textfile) and `p` (whose value should be the API key you’ve defined in `textfiles.php`.

The response to the POST request will contain the URL of the newly-created paste. You can append `/raw` to that URL to view the raw text of the paste.

## Notes

You can, of course, change the path from `/textfiles/` to anything else, modifying the scripts, config files, etc. in the obvious manner.

Font Awesome is required for the action icons on paste pages. A free version may be found at https://fontawesome.com/ (they even provide a CDN, so you don’t have to host it yourself).

Probably OborPaste can be adapted to work with a webserver other than Apache (as long as it has an equivalent of `mod_php`), but you’d have to replicate the configuration defined in the `.htaccess` file in whatever form of config file that’s appropriate to your webserver of choice.

Copyright 2022 Said Achmiz.
