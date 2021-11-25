let s1 = document.createElement('script');
let s2 = document.createElement('script');

s1.src = chrome.runtime.getURL('js/open_logs.js');
s1.onload = function () {
    this.remove();
};

s2.src = chrome.runtime.getURL('js/highlight_name.js');
s2.onload = function () {
    this.remove();
};

chrome.storage.sync.get(['openLogs','nameHighlight'], ({openLogs, nameHighlight})=>{
    if(openLogs){
        (document.head || document.documentElement).appendChild(s1);
    }
    if(nameHighlight){
        (document.head || document.documentElement).appendChild(s2);
    }
});