(function() {
  // ---------- DATA ----------
  const videoData = [
    { title: "Reels magic", category: "short", emoji: "📱" },
    { title: "Vlog series", category: "long", emoji: "🎞️" },
    { title: "Valorant clutch", category: "gaming", emoji: "🎮" },
    { title: "Messi skills", category: "football", emoji: "⚽" },
    { title: "Product launch", category: "ecommerce", emoji: "🛒" },
    { title: "Wildlife doc", category: "documentary", emoji: "🌿" },
    { title: "Cinematic grade", category: "color", emoji: "🎨" },
    { title: "Anime AMV", category: "anime", emoji: "🌸" },
    { title: "YouTube pre-roll", category: "ads", emoji: "📺" },
    { title: "Instagram reel", category: "short", emoji: "📲" },
    { title: "TikTok style", category: "short", emoji: "🎵" },
    { title: "Football highlights", category: "football", emoji: "🏟️" },
    { title: "Gaming montage", category: "gaming", emoji: "🕹️" },
    { title: "Color correction", category: "color", emoji: "🌈" },
    { title: "Anime trailer", category: "anime", emoji: "🎌" },
    { title: "eCommerce ad", category: "ecommerce", emoji: "💳" },
  ];

  const teamMembers = [
    { name: "Aarav Singh", emoji: "👨‍💻" },
    { name: "Priya Sharma", emoji: "👩‍🎨" },
    { name: "Rahul Verma", emoji: "🧑‍🏫" },
    { name: "Sneha Patel", emoji: "👩‍💼" },
    { name: "Vikram Reddy", emoji: "🧑‍🔧" },
    { name: "Kiran Rao", emoji: "👩‍🚀" },
  ];

  // ---------- RENDER TEAM ----------
  function renderTeam() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;
    grid.innerHTML = teamMembers.map(m => `
      <div class="team-card">
        <div class="team-avatar">${m.emoji}</div>
        <div><strong>${m.name}</strong></div>
        <div style="font-size:0.8rem; color:#5a6e91;">creative</div>
      </div>
    `).join('');
  }
  renderTeam();

  // ---------- PORTFOLIO ----------
  const container = document.getElementById('videoContainer');
  const categoryBtns = document.querySelectorAll('.category-btn');

  function renderVideos(category = 'all') {
    const filtered = category === 'all' ? videoData : videoData.filter(v => v.category === category);
    container.innerHTML = filtered.map(v => `
      <div class="video-item">
        <div class="video-thumb">${v.emoji}</div>
        <h4>${v.title}</h4>
        <p>#${v.category}</p>
      </div>
    `).join('');
    if (filtered.length === 0) {
      container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#5a6e91;">No videos in this category yet.</p>`;
    }
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.cat;
      renderVideos(cat);
    });
  });
  renderVideos('all');

  // ---------- EMAIL COLLECTOR (Google Sheets demo) ----------
  const emailForm = document.getElementById('emailCollector');
  const emailInput = document.getElementById('collectEmail');
  const emailFeedback = document.getElementById('emailFeedback');

  emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;
    console.log('📧 Email collected:', email);
    emailFeedback.innerHTML = `✅ Thanks! ${email} added to our list (demo).`;
    emailInput.value = '';
    // In production: replace with fetch to Apps Script web app URL
    // fetch('https://script.google.com/macros/s/YOUR_ID/exec', { method: 'POST', body: JSON.stringify({email}) })
  });

  // ---------- CONTACT FORM (Google Sheets demo) ----------
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email) {
      contactFeedback.innerHTML = '⚠️ Name and email are required.';
      return;
    }
    console.log('📝 Contact form:', { name, email, phone, message });
    contactFeedback.innerHTML = `✅ Message received! We'll get back to you soon (demo).`;
    contactForm.reset();
    // In production: POST to Google Apps Script
    // fetch('https://script.google.com/macros/s/YOUR_ID/exec', { method: 'POST', body: JSON.stringify({name, email, phone, message}) })
  });

  console.log('🔗 Google Sheets integration ready – replace fetch URLs with your Apps Script deployment.');
})();