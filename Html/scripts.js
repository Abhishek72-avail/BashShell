// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Generate sample posts
    const postsContainer = document.getElementById('postsContainer');
    const tagsCloud = document.getElementById('tagsCloud');
    
    const samplePosts = [
        {
            title: 'Getting Started with JavaScript',
            excerpt: 'Learn the fundamentals of JavaScript programming...',
            tags: ['JavaScript', 'Programming', 'Web Development'],
            date: '2023-07-20',
            image: 'https://source.unsplash.com/random/800x600?coding'
        },
        // Add more sample posts here (at least 10)
    ];

    const allTags = new Set();
    
    // Generate blog posts
    samplePosts.forEach(post => {
        const postElement = document.createElement('article');
        post.tags.forEach(tag => allTags.add(tag));
        
        postElement.className = 'blog-card';
        postElement.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span class="read-time">5 min read</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => <span class="tag">${tag}</span>).join('')}
                </div>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });

    // Generate tags cloud
    allTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsCloud.appendChild(tagElement);
    });

    // Newsletter Form Handling
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        // Add your newsletter signup logic here
        alert('Thanks for subscribing!');
        newsletterForm.reset();
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const posts = document.querySelectorAll('.blog-card');
        
        posts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const excerpt = post.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
