// ==UserScript==
// @name         TumbRes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Danni
// @include      *.tumblr.com/*
// @grant        none
// ==/UserScript==

const $img = document.querySelectorAll("img")

$img.forEach($im => {
    var i;
    for (i = 0; i < $img.length; i++) {
        const y = $im.src;
        const rep = y.replace("_500", "_1280");
        $im.src = rep;
    }
})();