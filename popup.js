document.getElementById('calculateButton').addEventListener('click', () => {
  // Request the total amount from the background script
  chrome.runtime.sendMessage({ action: "getTotalAmount" }, (response) => {
    const totalAmount = response.totalAmount || 0;
    document.getElementById('totalAmount').textContent = `Total: ₹${totalAmount.toFixed(2)}`;
  });
});

