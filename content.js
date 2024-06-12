// Function to extract order amounts from the Zomato order history page
function extractOrderAmounts() {
  let amounts = [];
  // Assuming Zomato displays order amounts in a specific class
  const orderElements = document.querySelectorAll('.order-amount-class'); // Update the selector based on actual class name
  orderElements.forEach(element => {
    const amountText = element.innerText.replace(/[^\d.-]/g, '');
    const amount = parseFloat(amountText);
    if (!isNaN(amount)) {
      amounts.push(amount);
    }
  });
  return amounts;
}

// Send the extracted amounts to the background script
chrome.runtime.sendMessage({ action: "extractedAmounts", data: extractOrderAmounts() });

