#IE Upgrade Warning

![Example Screenshot](http://img683.imageshack.us/img683/3734/exampleuk.png)

The ie-upgrade-warning is a little script (8kb) that displays a warning message politely informing the user to upgrade the browser to a newer version (links to newest IE, Firefox, Opera, Safari, Chrome are provided).

The webpage is still visible behind a transparent background, but access to it is prevented. The idea is to force users to upgrade from IE and avoid the website from a bad reputation that website is not rendering correctly in IE6.

This is based off http://code.google.com/p/ie6-upgrade-warning/. Thanks to him for a great script, [jbueza](https://github.com/jbueza/IE6-Warning-with-Localizations) has taken it further so that people can localize the messaging into different languages.

I wanted something smaller. With the original one on Google Code, it was weighing in at over 29KB with images. As of 2011-04-01 mine is under 19KB, almost 15KB with minified javascript. Also, I've reduce the HTTP Request from the original 7 to just 3. One of the localization, one for the javascript and one for the image sprite. I'm also updating the presentation to be compatible IE 7. Not woried about the other 4 browsers since their user base seems to stay up to date.

## Usage 

Look at the index.html file for example. This is a work in progress, as I'm refactoring someone else's code.

## Changelog

* major re-organization to reduce code size
* renamed project to ie-upgrade-warning (since other browsers are really good at keep users up to date)
* fixed display on IE7 and newer browsers
* cleaned up `var` usage
* optimize images and made into sprite
* Fixed JS Lint errors
* Parameterized configObj so that you can set an imgPath as well as localizations lookup object

##Contributers

* jbueza
* renatocarvalho
