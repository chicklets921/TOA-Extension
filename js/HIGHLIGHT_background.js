var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/highlight_name.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);