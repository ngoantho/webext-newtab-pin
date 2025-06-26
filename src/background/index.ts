// This file contains the background script for the Chrome extension. It listens
// for the event when a new tab is created and automatically pins it.

async function updateTab(tabId: number) {
  try {
    await chrome.tabs.update(tabId, { pinned: true });
  } catch (error) {
    console.error("Failed to pin tab: ", error);
  }
}

chrome.tabs.onCreated.addListener(async function (tab) {
  if (tab.id !== undefined) {
    await updateTab(tab.id);
  }
});

chrome.tabs.onDetached.addListener(async function (tabId) {
  await updateTab(tabId);
});
