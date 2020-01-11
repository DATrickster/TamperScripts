// ==UserScript==
// @name         O.I.N.T-ment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

const $links = document.querySelectorAll("a")


$links.forEach($link => {
    var i;
    for (i = 0; i < $links.length; i++) {
        $link.target = "_blank";
    }
})();