// i18n (Çok Dilli Destek Sistemi)
const translations = {
  en: {
    site_name: "xyverse",
    nav_rules: "Rules",
    nav_tos: "ToS",
    nav_imprint: "Imprint",
    nav_privacy: "Privacy",
    nav_join: "Join",
    nav_faq: "FAQ",
    btn_play: "Play Now",
    ip_copied: "✓ IP copied!",
    hero_title: "Join the Adventure!",
    hero_subtitle: "Explore, build and Dupe with your friends in our unique survival world!",
    btn_join_server: "Join Server",
    btn_faq: "Frequently Asked Questions",
    server_ip_title: "Server IP",
    server_info: "Everything is allowed. Except Server lagging • 99% uptime",
    rules_title: "Server Rules",
    rules_subtitle: "Basic principles for the sustainability of our community",
    rule1_title: "No Lagging",
    rule1_desc: "No Server Lagging via excessive actions or exploits. Vioolations lead to permanent ban.",
    rule2_title: "Community Respect",
    rule2_desc: "Insults, toxic speech and discriminatory behavior result in permanent ban.",
    rule3_title: "Economy Balance",
    rule3_desc: "Market manipulation and dupes are systematically tracked, detected accounts are reset.",
    note: "Note:",
    rules_note: "Detailed rules available in config/rules.yml, you can expand language support.",
    tos_title: "Terms of Service (ToS)",
    tos_subtitle: "Everyone using our services is deemed to have accepted these terms",
    tos1_title: "Service Scope",
    tos1_desc: "Server, web services and launcher infrastructure are provided by XYVerse. Reasonable effort is made for service continuity.",
    tos2_title: "Account Responsibility",
    tos2_desc: "User account security is the player's responsibility. Contact our support team upon unauthorized access detection.",
    tos3_title: "Payment and Refunds",
    tos3_desc: "Store purchases are digital content category and refund terms comply with GDPR and relevant regulations.",
    tos4_title: "Sanctions",
    tos4_desc: "Rule violations may result in warning, temporary ban or permanent ban. Decision reasons are shared transparently.",
    imprint_title: "Imprint / Legal Information",
    imprint_subtitle: "Our company and license information",
    company_info: "Company Information",
    company_name_label: "Name:",
    company_name: "#",
    company_address_label: "Address:",
    company_address: "#",
    company_tax_label: "Tax No:",
    company_tax: "1234567890",
    company_contact_label: "Contact:",
    license_title: "License & Copyright",
    license_desc: "All in-game assets are subject to Mojang Studios' Minecraft EULA. Server-specific scripts and models belong to xyvesre.",
    privacy_title: "Privacy Policy",
    privacy_subtitle: "We take data protection seriously",
    privacy1_title: "Collected Data",
    privacy1_desc: "IP address, in-game statistics, store transactions, support records. All stored in compliance with GDPR.",
    privacy2_title: "Retention Period",
    privacy2_desc: "Data is stored encrypted as long as player account is active; anonymized after 1 month of inactivity.",
    privacy3_title: "Your Rights",
    privacy3_desc: "For data access, correction, deletion and portability rights, create a request at privacy@turkblock.net.",
    policy_update: "Policy update:",
    policy_update_desc: "We publish the current version in docs/privacy.pdf with version number.",
    join_title: "How to Join?",
    join_subtitle: "Start your adventure in three easy steps",
    step1_title: "Download Launcher",
    step1_desc: "Download Windows/Mac compatible xyverse Launcher latest version from Launcher page.",
    download_launcher: "Download launcher",
    step2_title: "Link Your Account",
    step2_desc: "Synchronize your Premium account or xyverse ID. We recommend enabling two-factor authentication.",
    step3_title: "Enter Server",
    step3_desc: "Connect to xyverse.eu IP via the launcher",
    apply_whitelist: "",
    social_title: "Social Media & Community",
    social_subtitle: "Follow latest news and events",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "We answered the most curious topics of our community",
    faq1_question: "What is the server version?",
    faq1_answer: "Server runs on 1.21.8. And supports Java. Bedrock / Cracked is not supported.",
    faq2_question: "Can I join with cracked accounts?",
    faq2_answer: "No We Do Not Support cracked Accounts.",
    faq3_question: "Is the server stable, is there lag?",
    faq3_answer: "This Server guarantees 99% uptime. But Sometimes There is maintenance and Lagging.",
    faq4_question: "How Can I Dupe Items?",
    faq4_answer: "You Can Learn Duping From Our Discord Server. Or Find Dupes On YouTube.",
    footer_description: "The best place to explore, build, and dupe with friends in a unique survival world.",
    footer_quick_links: "Quick Links",
    footer_support: "Support & Contact",
    footer_discord: "Discord Community",
    footer_made_with: "Server Made By xyverse Team",
    footer_copyright: "© 2026 xyverse",
    footer_contact: "Support: xyanarchy@gmail.com"
  },
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language "${lang}" not found, defaulting to Turkish`);
    lang = "tr";
  }
  
  // Tüm [data-i18n] elementlerini bul ve güncelle
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else {
      console.warn(`Translation key "${key}" not found for language "${lang}"`);
    }
  });
  
  console.log(`Language changed to: ${lang}`);

  // Dil bayrağını güncelle
  const langFlags = {
    en: "🇬🇧 EN",
  };
  
  const currentLangEl = document.getElementById("currentLang");
  if (currentLangEl) {
    currentLangEl.textContent = langFlags[lang] || langFlags.tr;
  }

  // LocalStorage'a kaydet
  localStorage.setItem("preferred_language", lang);
  
  // HTML lang attribute güncelle
  document.documentElement.setAttribute("lang", lang);
}

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  // Tarayıcı dilini veya kaydedilmiş dili al
  const savedLang = localStorage.getItem("preferred_language");
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = savedLang || (translations[browserLang] ? browserLang : "tr");
  
  // Başlangıç dilini ayarla
  changeLanguage(defaultLang);
  
  // Dil dropdown click event
  document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.closest('.dropdown-item');
      const selectedLang = target.getAttribute("data-lang");
      if (selectedLang) {
        changeLanguage(selectedLang);
        
        // Dropdown'u kapat (Bootstrap)
        const dropdownEl = document.getElementById("langDropdown");
        const dropdown = bootstrap.Dropdown.getInstance(dropdownEl);
        if (dropdown) {
          dropdown.hide();
        } else {
          // Dropdown'u manuel kapat
          const menu = document.querySelector('.language-menu');
          if (menu) menu.classList.remove('show');
        }
      }
    });
  });
});

