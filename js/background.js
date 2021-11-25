let openLogs = true;
let nameHighlight = true;
let ORLColors = true;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ openLogs });
    chrome.storage.sync.set({ nameHighlight });
    chrome.storage.sync.set({ ORLColors });
    
    // console.log(`Default setting for \'Open Logs\' set to ${openLogs}`);
    // console.log(`Default setting for \'Name Highlight\' set to ${nameHighlight}`);
    // console.log(`Default setting for \'Outage Request List Colors\' set to ${ORLColors}`);
});