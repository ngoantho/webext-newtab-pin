async function updateTab(tabId: number) {
  try {
    await chrome.tabs.update(tabId, { pinned: true })
  } catch (error) {
    console.error("Failed to pin tab: ", error)
  }
}

chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.id !== undefined) {
    await updateTab(tab.id)
  }
})

chrome.tabs.onDetached.addListener(async (tabId) => {
  await updateTab(tabId)
})
