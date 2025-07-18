// Main JavaScript for Billion-Dollar Blueprints blog

document.addEventListener('DOMContentLoaded', function() {
    console.log('Billion-Dollar Blueprints blog initialized');
    
    // Check if we're on an article page (has paywall)
    const paywall = document.getElementById('paywall');
    const premiumContent = document.getElementById('premium-content');
    const paymentStatus = document.getElementById('payment-status');
    const checkPaymentBtn = document.getElementById('check-payment-btn');
    
    if (paywall && premiumContent) {
        console.log('Article page with paywall detected');
        
        // Check if the user has already paid for this article
        checkPaymentStatus();
        
        // Add event listener for payment check button
        if (checkPaymentBtn) {
            checkPaymentBtn.addEventListener('click', function() {
                checkPaymentStatus();
            });
        }
    }
});

// Function to check payment status via X402 extension
function checkPaymentStatus() {
    const paywall = document.getElementById('paywall');
    const premiumContent = document.getElementById('premium-content');
    const paymentStatus = document.getElementById('payment-status');
    
    if (!paywall || !premiumContent) return;
    
    // Show pending status
    if (paymentStatus) {
        paymentStatus.textContent = 'Checking payment status...';
        paymentStatus.className = 'payment-status status-pending';
        paymentStatus.classList.remove('hidden');
    }
    
    // Check if Chrome and extension exists
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
        console.log('Chrome extension API available, checking payment status');
        
        // Send message to X402 extension to check status
        chrome.runtime.sendMessage(
            { action: 'CHECK_STATUS' }, 
            function(response) {
                console.log('Payment status response:', response);
                
                if (response && response.status === 'OK') {
                    // If X402 is detected and payment is made
                    if (response.x402Detected && response.hasPayment) {
                        unlockContent('Payment verified');
                    } else {
                        // No payment detected
                        if (paymentStatus) {
                            paymentStatus.textContent = 'No payment detected. Please use the X402 extension to make a payment.';
                            paymentStatus.className = 'payment-status status-error';
                        }
                    }
                } else {
                    // Error or extension not responding
                    if (paymentStatus) {
                        paymentStatus.textContent = 'Could not verify payment status. Please ensure the X402 extension is installed.';
                        paymentStatus.className = 'payment-status status-error';
                    }
                }
            }
        );
    } else {
        console.log('Chrome extension API not available');
        if (paymentStatus) {
            paymentStatus.textContent = 'X402 extension not detected. Please install the extension to access premium content.';
            paymentStatus.className = 'payment-status status-error';
        }
    }
}

// Function to unlock premium content
function unlockContent(message) {
    const paywall = document.getElementById('paywall');
    const premiumContent = document.getElementById('premium-content');
    const paymentStatus = document.getElementById('payment-status');
    
    if (paywall) {
        paywall.style.display = 'none';
    }
    
    if (premiumContent) {
        premiumContent.style.display = 'block';
    }
    
    if (paymentStatus) {
        paymentStatus.textContent = message || 'Payment verified. Enjoy the premium content!';
        paymentStatus.className = 'payment-status status-success';
    }
    
    // Save to localStorage that this article has been paid for
    try {
        const articlePath = window.location.pathname;
        localStorage.setItem('paid_' + articlePath, 'true');
    } catch (e) {
        console.error('Could not save payment status to localStorage', e);
    }
}
