# Billion-Dollar Blueprints: Premium Blog with X402 Paywall

This project implements a premium blog platform that hosts 10 exclusive articles behind an X402 paywall. Each article requires a one-time payment of $0.50 USDC to unlock and read the content.

## Project Structure

- `index.html` - Main landing page with links to all premium articles
- `styles.css` - CSS styling for the entire blog
- `scripts.js` - JavaScript for handling X402 paywall functionality
- `placeholder-images.js` - Script to generate placeholder images for article cards
- `articles/` - Directory containing all premium article pages
- `images/` - Directory for article images (placeholder gradients used by default)

## X402 Paywall Integration

Each article page includes X402 payment meta tags in the header:

```html
<meta name="x-402-payment-required" content="true">
<meta name="x-402-amount" content="0.50">
<meta name="x-402-currency" content="USDC">
<meta name="x-402-description" content="Premium Article: [Article Title]">
<meta name="x-402-contract-address" content="0x1c7d4b196cb0c7b01d743fbc6116a902379c7238">
```

The X402 extension detects these meta tags and enables payment processing through the wallet bridge.

## Article Content

The blog features 10 premium articles on various billion-dollar business strategies:

1. The 10-Day Billion-Dollar Blueprint
2. AI-Driven Algorithmic Arbitrage
3. Quantum Crypto-Mining & Market Manipulation
4. Disruptive Green Energy Infrastructure
5. Asteroid Mining & Resource Extraction
6. Biotech Breakthrough Fast-Tracking
7. Global Supply Chain Optimization via AI
8. Hyper-Personalized Digital Experience Ecosystem
9. Next-Gen Urban Mobility Solutions
10. Deep-Sea Mineral Harvesting

## How to Run

1. Start a local web server in the project directory:
   ```
   python -m http.server 8080
   ```

2. Open a browser and navigate to:
   ```
   http://localhost:8080
   ```

3. Make sure the X402 extension is installed to handle payments.

## Payment Flow

1. User clicks on an article link from the index page
2. Article page loads with content hidden behind paywall
3. X402 extension detects payment meta tags
4. User initiates payment through the X402 extension
5. After successful payment, content is unlocked and displayed

## Development Notes

- The paywall implementation uses the X402 protocol for payment processing
- Each article has a unique URL and payment requirement
- Payment is a one-time fee of $0.50 USDC per article
- The blog design is minimal and focused on content presentation
