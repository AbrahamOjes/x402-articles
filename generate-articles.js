// Script to generate the remaining article pages with X402 paywall

const fs = require('fs');
const path = require('path');

// Article data for the remaining 7 articles
const articles = [
  {
    id: 'green-energy',
    title: 'Disruptive Green Energy Infrastructure',
    subtitle: 'The Billion-Dollar Eco-Industrial Revolution',
    author: 'Sarah Chen',
    authorInitials: 'SC',
    date: 'July 18, 2025'
  },
  {
    id: 'asteroid-mining',
    title: 'Asteroid Mining & Resource Extraction',
    subtitle: 'The Trillion-Dollar Space Rush',
    author: 'Dr. Marcus Williams',
    authorInitials: 'MW',
    date: 'July 19, 2025'
  },
  {
    id: 'biotech-breakthrough',
    title: 'Biotech Breakthrough Fast-Tracking',
    subtitle: 'The Billion-Dollar Life Science Leap',
    author: 'Dr. Amara Patel',
    authorInitials: 'AP',
    date: 'July 20, 2025'
  },
  {
    id: 'supply-chain',
    title: 'Global Supply Chain Optimization via AI',
    subtitle: 'The Billion-Dollar Logistics Revolution',
    author: 'Thomas Rodriguez',
    authorInitials: 'TR',
    date: 'July 21, 2025'
  },
  {
    id: 'digital-experience',
    title: 'Hyper-Personalized Digital Experience Ecosystem',
    subtitle: 'The Billion-Dollar Engagement Engine',
    author: 'Olivia Kim',
    authorInitials: 'OK',
    date: 'July 22, 2025'
  },
  {
    id: 'urban-mobility',
    title: 'Next-Gen Urban Mobility Solutions',
    subtitle: 'The Billion-Dollar City Transformation',
    author: 'Dr. James Foster',
    authorInitials: 'JF',
    date: 'July 23, 2025'
  },
  {
    id: 'deep-sea',
    title: 'Deep-Sea Mineral Harvesting',
    subtitle: 'The Billion-Dollar Abyssal Frontier',
    author: 'Dr. Sophia Nakamura',
    authorInitials: 'SN',
    date: 'July 24, 2025'
  }
];

// Template for article pages with X402 paywall
function generateArticleTemplate(article) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | Billion-Dollar Blueprints</title>
    
    <!-- X402 Payment Meta Tags -->
    <meta name="x-402-payment-required" content="true">
    <meta name="x-402-amount" content="0.50">
    <meta name="x-402-currency" content="USDC">
    <meta name="x-402-description" content="Premium Article: ${article.title}">
    <meta name="x-402-contract-address" content="0x1c7d4b196cb0c7b01d743fbc6116a902379c7238">
    
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <div class="container">
        <a href="../index.html" class="back-to-home">← Back to Articles</a>
        
        <div class="article-header">
            <div class="premium-badge">Premium Content</div>
            <h1 class="article-title">${article.title}</h1>
            <p class="article-subtitle">${article.subtitle}</p>
            
            <div class="author-info">
                <div class="author-avatar">${article.authorInitials}</div>
                <div class="author-details">
                    <div class="author-name">${article.author}</div>
                    <div class="publish-date">Published ${article.date}</div>
                </div>
            </div>
        </div>
        
        <div class="payment-notice">
            <h3>🔒 Premium Article</h3>
            <p>This in-depth analysis requires payment to access</p>
            <div class="payment-amount">$0.50 USDC</div>
            <p>Click the Autospend extension to pay and unlock this content</p>
        </div>
        
        <!-- Paywall section - shown before payment -->
        <div id="paywall" class="paywall">
            <h3>Premium Content</h3>
            <p>This in-depth analysis requires a payment of 0.50 USDC to access.</p>
            <div class="payment-amount">$0.50 USDC</div>
            <p>Please use the Autospend X402 extension to make this payment.</p>
            
            <div id="payment-status" class="payment-status status-pending hidden">
                Checking payment status...
            </div>
            
            <button id="check-payment-btn">Check Payment Status</button>
        </div>
        
        <!-- Premium content - initially hidden -->
        <div id="premium-content" class="article-content-body premium-content">
            <h2>${article.title}: ${article.subtitle}</h2>
            
            <p>This premium article contains exclusive content about ${article.title}. The full content will be populated with the actual article text from the markdown file.</p>
            
            <div class="highlight">
                <p><strong>CRITICAL INSIGHT:</strong> This is a placeholder for the actual article content. In a real implementation, this would contain the full article text extracted from the markdown file.</p>
            </div>
            
            <h2>PILLAR ONE: Key Strategy Component</h2>
            
            <p>Detailed explanation of the first strategic pillar would go here...</p>
            
            <ul>
                <li><strong>Strategic Element 1:</strong> Description of the first strategic element.</li>
                <li><strong>Strategic Element 2:</strong> Description of the second strategic element.</li>
                <li><strong>Strategic Element 3:</strong> Description of the third strategic element.</li>
            </ul>
            
            <div class="quote">
                "A relevant quote about this billion-dollar strategy would appear here."
            </div>
            
            <h2>CONCLUSION: The Future Opportunity</h2>
            
            <p>Concluding thoughts about this billion-dollar opportunity would appear here.</p>
        </div>
        
        <footer class="site-footer">
            <p>&copy; 2025 Billion-Dollar Blueprints. All rights reserved.</p>
            <p>Powered by X402 Protocol</p>
        </footer>
    </div>

    <script src="../scripts.js"></script>
</body>
</html>`;
}

// Create articles directory if it doesn't exist
const articlesDir = path.join(__dirname, 'articles');
if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir, { recursive: true });
}

// Generate article pages
articles.forEach(article => {
  const filePath = path.join(articlesDir, `${article.id}.html`);
  fs.writeFileSync(filePath, generateArticleTemplate(article));
  console.log(`Generated article page: ${filePath}`);
});

console.log('All article pages have been generated successfully!');
