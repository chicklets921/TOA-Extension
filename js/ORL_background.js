var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/outage_request_list.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);