// ==UserScript==
// @name         Twitch Safe Unban Requests
// @namespace    twitch-safe-unban-requests
// @version      0.0.1
// @author       boraflame
// @description  Remove user profile pictures and viewer card backgrounds from unban requests.
// @supportURL   https://github.com/boralv/twitch-safe-unban-requests/issues
// @homepage     https://github.com/boralv/twitch-safe-unban-requests/
// @updateURL    https://raw.githubusercontent.com/boralv/twitch-safe-unban-requests/master/twitch-safe-unban-requests.user.js
// @downloadURL  https://raw.githubusercontent.com/boralv/twitch-safe-unban-requests/master/twitch-safe-unban-requests.user.js
// @match        https://www.twitch.tv/popout/moderator/*/unban-requests
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==

setInterval(() => {
    if (document.querySelectorAll('.tw-image-avatar')) {
        document.querySelectorAll('.tw-image-avatar').forEach(e => e.remove());
    }
    if (document.querySelectorAll('.viewer-card-header__background')) {
        document.querySelectorAll('.viewer-card-header__background').forEach(e => e.removeAttribute('style'));
    }
}, 1000)