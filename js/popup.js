let openLogsCheckbox = document.getElementById('openLogs');
let nameHighlightCheckbox = document.getElementById('nameHighlight');
let ORLColorsCheckbox = document.getElementById('ORLColors');

chrome.storage.sync.get(['openLogs', 'nameHighlight', 'ORLColors'], ({openLogs, nameHighlight, ORLColors}) => {
    openLogsCheckbox.checked = openLogs;
    nameHighlightCheckbox.checked = nameHighlight;
    ORLColorsCheckbox.checked = ORLColors;
});

openLogsCheckbox.addEventListener('click', async() => {
    chrome.storage.sync.set({ openLogs: openLogsCheckbox.checked}, function(){
        chrome.storage.sync.get('openLogs', ({openLogs})=>{
            console.log(`\'Open Logs\' is set to ${openLogs}`);
        });
    });
});

nameHighlightCheckbox.addEventListener('click', async() => {
    chrome.storage.sync.set({ nameHighlight: nameHighlightCheckbox.checked}, function(){
        chrome.storage.sync.get('nameHighlight', ({nameHighlight})=>{
            console.log(`\'Name Highlight\' is set to ${nameHighlight}`);
        });
    });
});

ORLColorsCheckbox.addEventListener('click', async() => {
    chrome.storage.sync.set({ ORLColors: ORLColorsCheckbox.checked}, function(){
        chrome.storage.sync.get('ORLColors', ({ORLColors})=>{
            console.log(`\'Dark Mode\' is set to ${ORLColors}`);
        });
    });
});