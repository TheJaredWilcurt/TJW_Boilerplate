#NOTES

This document is meant to explain all parts of this boilerplate. It is based, in part, on the HTML5 Boilerplate, however I've altered it enough to call it my own, and include all the tools I routinely use on websites. I intend on keep this up to date as I add more items to my expanding toolkit, and retire older ones of lesser value.

The boilerplate page can be viewed live here:

* [TheJaredWilcurt.github.io/TJW_Boilerplate](http://thejaredwilcurt.github.io/TJW_Boilerplate)

In regards to specific files, either they are mentioned below, or they are already commented to explain what their purpose or function is.

##_assets Folder

This folder should contain all of the content that is used for the creation of the website, but isn't a part of the final product. For example, .psd files, images too large for use on the web, unedited photos, editable logo files, etc.

##_img Folder

This folder holds all graphic elements that are not photos. blank.gif is a 1px by 1px transparent image. It comes in handy on occassion.

##_sass Folder

Contains all the .scss and .sass files that make up the CSS for the site. Use compass installed in Ruby, or Scout-App to process these. The style.scss file pulls in all other sass documents in to one.

##_scripts Folder

Contains all javascript for the site including the the main.dev.js which is the uncompressed version of main.js. Also contains the jQuery fallback in case Google CDN cannot be reached.

##_style Folder

The final outputted style.css document that gets processed from the _sass folder is stored here. All pages on the site reference this one style document.

##Root Directory

The root of the site contains the main index.htm file which should be renamed to default.htm on IIS servers. It also contains the home screen icons for all the various iOS devices, and the favicon for browser tabs. The 404 file came from HTML5BP as did crossdomain and htaccess. I've edited the humans and robots files, so if others use this boilerplate, you'll need to alter those as you see fit.

The index.htm file contains the following items of importance:

 * It begins with the html5 doctype
 * The first line after `<head>` is:  
   `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`  
   which forces all versions of IE to render using the newest web technology available to them.
 * The viewport is set to allow media query/responsive design.
 * HTML5 shim is in place so newer tags like `<footer>` will be understood by old versions of IE.
 * Google CDN copy of jQuery is loaded, if it doesn't load then the next line of code detects that and injects a line to load up the local copy.
 * Just before the `</body>` the site's main javascript is loaded. This should make the page look like it renders faster.

* * *

### Credit

Much of this repo is inspired (outright stolen) from the HTML 5 Boilerplate
