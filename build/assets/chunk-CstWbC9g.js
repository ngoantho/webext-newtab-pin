async function e(a){try{await chrome.tabs.update(a,{pinned:!0})}catch(t){console.error("Failed to pin tab: ",t)}}chrome.tabs.onDetached.addListener(async function(a){await e(a)});
