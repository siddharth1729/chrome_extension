let totalAmount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extractedAmounts") {
    const amounts = message.data;
    totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);
    chrome.storage.local.set({ totalAmount: totalAmount }, () => {
      console.log("Total amount saved:", totalAmount);
    });
  }
});

// To fetch the total amount when needed
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTotalAmount") {
    chrome.storage.local.get("totalAmount", (result) => {
      sendResponse({ totalAmount: result.totalAmount });
    });
    return true;
  }
});


