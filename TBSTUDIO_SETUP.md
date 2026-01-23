# 🔧 TBStudio - Minecraft Server Website Setup & Customization Guide

<div align="center">

![TBStudio](https://img.shields.io/badge/TBStudio-Premium%20Theme-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.1-blue?style=for-the-badge)

**Professional Minecraft Server Website Theme**

*Installation, Customization & Editing Manual*

</div>

---

## 📑 Table of Contents

1. [System Requirements](#-system-requirements)
2. [Installation Steps](#-installation-steps)
3. [Basic Edits](#-basic-edits)
4. [Advanced Customization](#-advanced-customization)
5. [Language Management](#-language-management)
6. [Troubleshooting](#-troubleshooting)
7. [FAQ](#-frequently-asked-questions)
8. [Support](#-support)

---

## 💻 System Requirements

### Minimum Requirements
- ✅ Web Server (Apache/Nginx/IIS)
- ✅ PHP 7.4+ (optional, static HTML)
- ✅ Modern Browser (Chrome 90+, Firefox 88+, Safari 14+)
- ✅ 50 MB Disk Space
- ✅ SSL Certificate (recommended)

### Recommended Tools
- 📝 **Text Editor:** VSCode, Sublime Text, Notepad++
- 🎨 **Image Editor:** Photoshop, GIMP, Figma
- 🌐 **FTP Client:** FileZilla, WinSCP
- 🔍 **Browser:** Chrome DevTools

---

## 🚀 Installation Steps

### Step 1: Download and Extract Files

```bash
# Extract the ZIP file
unzip minecraft-server-website.zip

# Check folder structure
minecraft-server-website/
├── index.html
├── README.md
├── TBSTUDIO_SETUP.md
├── assets/
│   ├── css/style.css
│   ├── js/i18n.js
│   ├── js/main.js
│   └── images/256x256tblogo.png
└── favicon.png
```

### Step 2: Upload to Server

#### FTP Upload
```bash
# Connect with FileZilla or WinSCP
Host: ftp.yourdomain.com
Username: your_username
Password: your_password
Port: 21

# Upload files to public_html or www directory
/public_html/
/var/www/html/
/home/username/public_html/
```

#### cPanel Upload
1. Login to cPanel
2. Open **File Manager**
3. Navigate to **public_html** folder
4. Click **Upload** button
5. Upload all files
6. If ZIP, right-click > **Extract**

#### Localhost (Development)
```bash
# Using XAMPP/WAMP
C:\xampp\htdocs\minecraft-server\

# Python SimpleHTTPServer
python -m http.server 8000

# Node.js http-server
npx http-server
```

### Step 3: Initial Check

Open in your browser:
```
http://yourdomain.com
or
http://localhost/minecraft-server
```

**Checklist:**
- ✅ Page loads correctly?
- ✅ Video autoplay working?
- ✅ Language switcher working?
- ✅ All icons visible?
- ✅ Discord widget visible in footer?

---

## ⚙️ Basic Edits

### 🎨 1. Change Logo

#### Prepare Logo
- **Size:** 256x256 pixels (recommended)
- **Format:** PNG (transparent background)
- **Filename:** `256x256tblogo.png`

#### Replace Logo
```bash
# Delete or backup old logo
/assets/images/256x256tblogo.png

# Save your new logo with the same name
# OR
# Update all logo references in index.html
```

**In index.html (change in 3 places):**
```html
<!-- Navbar Logo -->
<img src="YOUR_NEW_LOGO.png" alt="Logo" class="logo-img">

<!-- Hero Logo -->
<img src="YOUR_NEW_LOGO.png" alt="Server Logo" class="server-logo-img">

<!-- Footer Logo -->
<img src="YOUR_NEW_LOGO.png" alt="Server Logo" class="footer-logo">
```

### 🌐 2. Change Server IP

**In index.html file:**
```html
<!-- Server IP Card -->
<div class="ip-box">play.yourdomain.net</div>

<!-- Footer -->
<span class="ip-value">play.yourdomain.net</span>
```

**In assets/js/i18n.js (for all 21 languages):**
```javascript
// English
server_ip: "play.yourdomain.net",

// German
server_ip: "play.yourdomain.net",

// ... repeat for other languages
```

**Bulk Replace (VSCode or Notepad++):**
```
Find: play.turkblock.net
Replace: play.yourdomain.net
Replace All
```

### 🎬 3. Change YouTube Video

**Find Video ID:**
```
YouTube URL: https://www.youtube.com/watch?v=h8UpC5JbMU0
Video ID: h8UpC5JbMU0
```

**In index.html file:**
```html
<iframe id="bgVideo" 
  title="Server Trailer Video"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=60&enablejsapi=1" 
  frameborder="0" 
  allow="autoplay; encrypted-media" 
  allowfullscreen>
</iframe>
```

**Parameters:**
- `autoplay=1` - Autoplay
- `mute=1` - Start muted
- `loop=1` - Loop video
- `start=60` - Start at 60 seconds (adjustable)
- `controls=0` - Hide controls

### 💬 4. Setup Discord Widget

**Find Your Discord Server ID:**
1. Discord Server Settings
2. Widget menu
3. Enable Widget
4. Copy Server ID

**In index.html file:**
```html
<iframe 
  title="Discord Server Widget"
  src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark" 
  width="100%" 
  height="300" 
  allowtransparency="true" 
  frameborder="0" 
  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
</iframe>
```

**Widget Themes:**
- `theme=dark` - Dark theme
- `theme=light` - Light theme

### 📱 5. Social Media Links

**index.html - Footer Social Media Section:**
```html
<div class="footer-social">
  <a href="https://discord.gg/YOUR_SERVER" target="_blank" rel="noopener" class="social-icon discord" aria-label="Discord Server">
    <i class="fab fa-discord"></i>
  </a>
  <a href="https://twitter.com/YOUR_ACCOUNT" target="_blank" rel="noopener" class="social-icon twitter" aria-label="Twitter Account">
    <i class="fab fa-twitter"></i>
  </a>
  <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank" rel="noopener" class="social-icon youtube" aria-label="YouTube Channel">
    <i class="fab fa-youtube"></i>
  </a>
  <a href="https://instagram.com/YOUR_ACCOUNT" target="_blank" rel="noopener" class="social-icon instagram" aria-label="Instagram Account">
    <i class="fab fa-instagram"></i>
  </a>
</div>
```

**index.html - Social Media Section (Middle of Page):**
```html
<section id="social">
  <a href="DISCORD_LINK" class="social-link" aria-label="Join Discord">
  <a href="TWITTER_LINK" class="social-link" aria-label="Follow on Twitter">
  <a href="YOUTUBE_LINK" class="social-link" aria-label="Subscribe on YouTube">
  <a href="FACEBOOK_LINK" class="social-link" aria-label="Like on Facebook">
  <a href="GITHUB_LINK" class="social-link" aria-label="Follow on GitHub">
</section>
```

### 📧 6. Contact Information

**index.html - Footer:**
```html
<ul>
  <li>
    <i class="fas fa-envelope"></i>
    <a href="mailto:support@yourdomain.net">support@yourdomain.net</a>
  </li>
  <li>
    <i class="fas fa-phone"></i>
    <span>+1 XXX XXX XXXX</span>
  </li>
  <li>
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
  </li>
</ul>
```

**assets/js/i18n.js - For each language:**
```javascript
footer_contact: "Support: support@yourdomain.net | Tel: +1 XXX XXX XXXX"
```

---

## 🎨 Advanced Customization

### 🌈 1. Change Color Theme

**assets/css/style.css - Beginning:**
```css
:root {
  /* Main Colors */
  --minecraft-green: #3cb043;          /* Main green */
  --minecraft-dark-green: #2a9d34;     /* Dark green */
  
  /* Text Colors */
  --text-light: #e8e8e8;
  --text-light-50: rgba(232, 232, 232, 0.5);
  --text-dark: #1a1a1a;
  
  /* Background Colors */
  --bg-dark: #0f1419;
  --bg-section: #1a1f26;
}
```

**Example: Blue Theme**
```css
:root {
  --minecraft-green: #1e90ff;          /* Blue */
  --minecraft-dark-green: #1c7ed6;     /* Dark blue */
}
```

**Example: Red Theme**
```css
:root {
  --minecraft-green: #ff4444;          /* Red */
  --minecraft-dark-green: #cc0000;     /* Dark red */
}
```

**Example: Purple Theme**
```css
:root {
  --minecraft-green: #9b59b6;          /* Purple */
  --minecraft-dark-green: #8e44ad;     /* Dark purple */
}
```

### 📝 2. Edit Content

#### Rules Section
**index.html:**
```html
<div class="card">
  <h3 class="card-title" data-i18n="rule1_title">Rule Title</h3>
  <p class="card-text" data-i18n="rule1_desc">Rule description goes here...</p>
</div>
```

**assets/js/i18n.js:**
```javascript
rule1_title: "New Rule Title",
rule1_desc: "New rule description goes here.",
```

#### Adding New Rule
1. Add new card in rules section in `index.html`
2. Add translation for each language in `i18n.js`
3. Refresh page

#### Edit FAQ
**index.html:**
```html
<div class="accordion-item">
  <h2 class="accordion-header">
    <button class="accordion-button collapsed" data-i18n="faq1_question">
      Question title
    </button>
  </h2>
  <div class="accordion-collapse collapse">
    <div class="accordion-body" data-i18n="faq1_answer">
      Answer text
    </div>
  </div>
</div>
```

### 🖼️ 3. Change Favicon

**Prepare Favicon:**
- **Size:** 32x32 or 64x64 pixels
- **Format:** PNG or ICO
- **Filename:** `favicon.png` or `favicon.ico`

**index.html - head section:**
```html
<link rel="icon" type="image/png" href="favicon.png" />
```

**Multiple Formats (Recommended):**
```html
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

### 📊 4. Navbar Menu Items

**Add Menu Item:**
```html
<!-- Left Menu -->
<ul class="navbar-nav navbar-left">
  <li class="nav-item">
    <a class="nav-link" href="#new-section" data-i18n="nav_new">New Section</a>
  </li>
</ul>
```

**Add Translation (assets/js/i18n.js):**
```javascript
nav_new: "New Section",  // English
nav_new: "Neue Sektion",  // German
nav_new: "Nueva Sección",  // Spanish
// ... other languages
```

**Remove Menu Item:**
- Delete the corresponding `<li>` tag in navbar
- Delete content section (`<section id="...">`)
- Clean up styles in CSS if needed

### 🎬 5. Animation Settings

**Logo Animation Speed (assets/css/style.css):**
```css
@keyframes floatLogo {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);  /* Less: -3px, More: -12px */
  }
}

.logo-img {
  animation: floatLogo 3s ease-in-out infinite;  /* Speed: 2s - 5s */
}
```

**Scroll Animation Delays:**
```css
.fade-up {
  transition: opacity 0.9s, transform 0.9s;  /* Speed adjustment */
}

.delay-1 { transition-delay: 0.2s; }  /* Delay */
.delay-2 { transition-delay: 0.4s; }
.delay-3 { transition-delay: 0.6s; }
```

---

## 🌍 Language Management

### Add New Language

#### Step 1: Add Translation (assets/js/i18n.js)
```javascript
const translations = {
  tr: { /* Turkish */ },
  en: { /* English */ },
  
  // Add New Language
  fi: {  // Finnish example
    site_name: "Minecraft Server",
    nav_rules: "Säännöt",
    nav_tos: "Ehdot",
    nav_imprint: "Tiedot",
    nav_privacy: "Yksityisyys",
    nav_faq: "UKK",
    btn_play: "Pelaa nyt",
    ip_copied: "✓ IP kopioitu!",
    hero_title: "Liity seikkailuun!",
    hero_subtitle: "Explore, build and become a legend with your friends!",
    // ... translate all keys (85+ lines)
    footer_copyright: "© 2025 Your Server. All rights reserved.",
    footer_contact: "Support: support@yourserver.net | Tel: +1 XXX XXX XXXX"
  }
};
```

#### Step 2: Add Flag (index.html)
```html
<div class="dropdown-menu language-menu">
  <!-- Existing languages -->
  
  <!-- New Language -->
  <a class="dropdown-item" href="#" data-lang="fi" data-flag="fi">
    <img src="https://flagcdn.com/w40/fi.png" alt="Finnish" class="flag-icon">
    <span>Suomi</span>
  </a>
</div>
```

**Flag Codes:** https://flagcdn.com/

### Change Default Language

**assets/js/i18n.js:**
```javascript
// Default language on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("preferred_language") || "en";  // Change "en" to your preferred language
  changeLanguage(savedLang);
});
```

### Remove Language

1. `assets/js/i18n.js` - Delete the language object
2. `index.html` - Delete the corresponding item in language dropdown

---

## 🔧 Troubleshooting

### Video Not Playing

**Checklist:**
1. ✅ Internet connection active?
2. ✅ YouTube video ID correct?
3. ✅ Video allows embedding?
4. ✅ Browser console errors?

**Solution:**
```javascript
// assets/js/main.js - Add video check
const video = document.getElementById('bgVideo');
if (video) {
  video.addEventListener('error', function() {
    console.error('Video failed to load!');
  });
}
```

### Discord Widget Not Showing

**Checklist:**
1. ✅ Widget enabled in Discord server settings?
2. ✅ Server ID correct?
3. ✅ iframe sandbox settings correct?

**Discord Server Settings:**
1. Server Settings > Widget
2. "Enable Server Widget" - Turn on
3. Copy Server ID

### Language Not Changing

**Checklist:**
1. ✅ `data-i18n` attributes correct?
2. ✅ Translation keys matching?
3. ✅ JavaScript errors? (F12 Console)

**Solution:**
```javascript
// Test in console (F12)
changeLanguage('en');  // Should change language
console.log(translations.en);  // Should show translations
```

### Icons Not Showing

**Check:**
```html
<!-- Font Awesome CDN present? -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

**Alternative CDN:**
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.5.1/css/all.css" />
```

### Responsive Not Working on Mobile

**Check:**
```html
<!-- Viewport meta tag present? -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### IP Copy Not Working

**Browser Requirements:**
- HTTPS required (or localhost)
- Modern browser (Chrome 90+)

**Test:**
```javascript
// Test in console (F12)
navigator.clipboard.writeText('test').then(() => {
  console.log('Clipboard working!');
});
```

---

## ❓ Frequently Asked Questions

### How many languages are supported?
**21 languages** with full translations.

### Is the theme responsive?
Yes, fully responsive for mobile, tablet and desktop.

### Is PHP required?
No, completely static HTML/CSS/JavaScript.

### Is a database required?
No, uses LocalStorage.

### Is it SEO friendly?
Yes, uses semantic HTML and meta tags.

### Which browsers are supported?
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### What is the license?
Licensed for commercial use.

### Are updates free?
Contact TBStudio for license details.

### Is customization support available?
Yes, paid customization service is available.

### Hosting recommendation?
Any static hosting: Netlify, Vercel, GitHub Pages, or your own server.

---

## 📞 Support

### TBStudio Contact

**🌐 Web:** tbstudio.net  
**📧 Email:** info@tbstudio.net  
**💬 Discord:** TBStudio Community  
**📱 WhatsApp:** +90 XXX XXX XX XX

### Support Packages

#### 🥉 Basic Support (Free)
- 📚 Documentation access
- 💬 Discord community support
- 📧 Email support (48 hours)

#### 🥈 Premium Support
- ⚡ Priority email support (24 hours)
- 💬 Direct Discord support
- 🎨 1 hour free customization
- 🔄 Free updates (1 year)

#### 🥇 VIP Support
- 🚀 24/7 support
- 🎨 Unlimited customization
- 🔄 Lifetime updates
- 👨‍💻 Custom development services

---

## 📋 Checklist

### Before Installation
- [ ] Hosting/server ready
- [ ] FTP credentials available
- [ ] Logo ready (256x256 PNG)
- [ ] Social media links collected
- [ ] Discord widget active
- [ ] YouTube video ID found

### After Installation
- [ ] All files uploaded
- [ ] index.html opens
- [ ] Logo visible
- [ ] Video playing
- [ ] Language switcher working
- [ ] Discord widget visible
- [ ] Social media links working
- [ ] IP copy working
- [ ] Mobile display correct

### SEO Optimization
- [ ] Meta tags updated
- [ ] Favicon added
- [ ] Sitemap created
- [ ] Google Analytics added
- [ ] robots.txt created

---

## 🎓 Tutorial Videos

### TBStudio YouTube Channel
1. 📹 Installation Guide (10 minutes)
2. 📹 Logo and Color Change (5 minutes)
3. 📹 Content Editing (15 minutes)
4. 📹 Language Addition Guide (8 minutes)
5. 📹 Discord Widget Setup (5 minutes)

**🔗 Channel:** youtube.com/@tbstudio

---

## 📝 Updates

### How to Update?

1. **Backup:**
```bash
# Backup your current files
cp -r minecraft-server/ minecraft-server-backup/
```

2. **Download New Files:**
- Download new version from TBStudio

3. **Keep Your Customizations:**
- Logo
- Translation changes
- Social media links
- Color settings

4. **Upload New Files:**
- Update only `assets/` folder
- Manually merge `index.html` changes

5. **Test:**
- Check all features
- Clear browser cache (Ctrl+F5)

---

## 🎨 Bonus: Custom CSS Examples

### Alternative Button Style
```css
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}
```

### Card Shadow Effect
```css
.card {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

### Neon Glow Effect
```css
.neon-text {
  color: #fff;
  text-shadow: 
    0 0 10px #3cb043,
    0 0 20px #3cb043,
    0 0 30px #3cb043,
    0 0 40px #3cb043;
  animation: neonPulse 2s infinite alternate;
}

@keyframes neonPulse {
  from { text-shadow: 0 0 10px #3cb043; }
  to { text-shadow: 0 0 30px #3cb043, 0 0 40px #3cb043; }
}
```

### Gradient Background
```css
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 200% 200%;
  animation: gradientMove 5s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

<div align="center">

## 🌟 TBStudio Premium Theme

**The right choice for professional web solutions**

[🌐 Website](https://tbstudio.net) | [📧 Email](mailto:info@tbstudio.net) | [💬 Discord](https://discord.gg/tbstudio)

---

**Good luck! 🚀**

*Made with ❤️ by TBStudio*

**v1.0.1** - 2025

</div>
