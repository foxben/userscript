/*
* 
*/

// ==UserScript==
// @name          a5874575554
// @description   stuff
// @include       http://*.ponychan.net/*
// @include       http://*.lunachan.net/*
// @include       http://*ponychan.net/*
// @include       http://*lunachan.net/*
// @description   http://ponyupz.tumblr.com/
// @version       3.0.1
// @homepage	  None
// @copyright 	  2011, Further Developement by Zashy, Initially Developed by Arcs, free to mod and distribute, please credit author(Arcs)
// ==/UserScript==

/**
 * Includes the CSS or JS file into the head of the page.
 * 
 * @param {string} url URL of the CSS or JS file
 * @param {string} [type] 'css' or 'js' to specify the type of file.
 *                        This parameter is optional, but it should be 
 *                        used if the url does not end in '.css' or '.js'.
 */
function include(url, type) {
    // If type is empty, determine type via file extension
    type = (type || url.split('.').pop()).toLowerCase();
    
    // Get the <head> tag (fallback for IE8)
    document.head || (document.head = document.getElementsByTagName('head')[0]);
    
    if (type === 'css') {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        // Add <link> to <head>
        document.head.appendChild(link);
    } else if (type === 'js') {
        var script = document.createElement('script');
        script.src = url;
        // Make sure scripts run in the order in which they're included.
        script.async = false;
        // Add <script> to <head>
        document.head.appendChild(script);
    } else {
        throw new Error('Failed to include ' + url + ' due to unknown file type.');
    }
}

include("http://zashy.bitbucket.org/alpha/ponyupz.css");
include("http://zashy.bitbucket.org/alpha/ponyupz.js");