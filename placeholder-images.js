// Script to create placeholder images for article cards

document.addEventListener('DOMContentLoaded', function() {
    // Get all article image placeholders
    const articleImages = document.querySelectorAll('.article-image');
    
    // If there are no article images, exit
    if (!articleImages.length) return;
    
    // For each article image, create a gradient background if no image is set
    articleImages.forEach(img => {
        // Check if background image is already set
        const style = window.getComputedStyle(img);
        const bgImage = style.getPropertyValue('background-image');
        
        // If no background image or it's just 'none', create a placeholder
        if (!bgImage || bgImage === 'none') {
            // Generate a random gradient
            const hue1 = Math.floor(Math.random() * 360);
            const hue2 = (hue1 + 40 + Math.floor(Math.random() * 80)) % 360;
            
            const gradient = `linear-gradient(135deg, hsl(${hue1}, 80%, 60%), hsl(${hue2}, 80%, 40%))`;
            img.style.backgroundImage = gradient;
            
            // Add a pattern overlay for texture
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.opacity = '0.1';
            overlay.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")';
            
            img.appendChild(overlay);
            
            // Add a relevant icon based on the article title
            const articleTitle = img.closest('.article-card').querySelector('h2').textContent.toLowerCase();
            let iconContent = '💰'; // Default icon
            
            if (articleTitle.includes('ai') || articleTitle.includes('algorithm')) {
                iconContent = '🤖';
            } else if (articleTitle.includes('crypto') || articleTitle.includes('mining')) {
                iconContent = '₿';
            } else if (articleTitle.includes('energy') || articleTitle.includes('green')) {
                iconContent = '🌱';
            } else if (articleTitle.includes('asteroid') || articleTitle.includes('space')) {
                iconContent = '🚀';
            } else if (articleTitle.includes('biotech') || articleTitle.includes('science')) {
                iconContent = '🧬';
            } else if (articleTitle.includes('supply') || articleTitle.includes('chain')) {
                iconContent = '📦';
            } else if (articleTitle.includes('digital') || articleTitle.includes('experience')) {
                iconContent = '📱';
            } else if (articleTitle.includes('urban') || articleTitle.includes('mobility')) {
                iconContent = '🏙️';
            } else if (articleTitle.includes('sea') || articleTitle.includes('mineral')) {
                iconContent = '🌊';
            }
            
            const icon = document.createElement('div');
            icon.style.position = 'absolute';
            icon.style.top = '50%';
            icon.style.left = '50%';
            icon.style.transform = 'translate(-50%, -50%)';
            icon.style.fontSize = '64px';
            icon.style.opacity = '0.8';
            icon.textContent = iconContent;
            
            img.appendChild(icon);
        }
    });
});
