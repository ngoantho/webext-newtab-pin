async function updateTab(tabId: number) {
  try {
    await chrome.tabs.update(tabId, { pinned: true });
  } catch (error) {
    console.error("Failed to pin tab: ", error);
  }
}

chrome.tabs.onDetached.addListener(async function (tabId) {
  await updateTab(tabId);
});
