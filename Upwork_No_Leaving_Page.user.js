// ==UserScript==
// @name        Upwork No Leaving Page
// @namespace   upwork
// @description When Upwork tries to nag you that "you are leaving Upwork", redirect immediately to target
// @include     https://www.upwork.com/leaving?ref=*
// @version     1
// @grant       none
// ==/UserScript==

((window, undefined) => {
	var w = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
	if(w.self !== w.top) return; // don't run in frames
	if(!/^https:\/\/www.upwork.com\/leaving\?ref=/.test(w.location.href)) return; // duplicate "include" checking

	// first of all, blank all the body to avoid confusing and to speed up loading
	w.document.body.innerText = '...Redirecting...';

	// find out target url
	var match = w.location.href.match(/\/leaving\?ref=(.*)/);
	var ref = match[1];
	var url = decodeURIComponent(ref);
	// do redirect
	w.location.href = url;
})(window);
