// This file contains the background script for the Chrome extension. It listens
// for the event when a new tab is created and automatically pins it.

//  Listen for the creation of a new tab and pin it automatically
chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.id !== undefined) {
    chrome.tabs.update(tab.id, {pinned: true});
  }
})
