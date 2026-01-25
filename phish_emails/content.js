// ================================
// CONFIGURATION
// ================================

// Trusted legitimate domains
const TRUSTED_DOMAINS = [
  "pwc.com",
  "myworkday.com",
  "myworkdayjobs.com",
  "workday.com",
  "google.com",
  "amazon.com",
  "microsoft.com"
];

// Phishing-related keywords
const PHISHING_KEYWORDS = [
  "verify",
  "urgent",
  "password",
  "login",
  "account",
  "suspended",
  "click here",
  "security alert",
  "update immediately"
];

// Dangerous attachment extensions
const DANGEROUS_EXTENSIONS = [
  ".exe", ".js", ".bat", ".scr", ".zip", ".rar"
];

// ================================
// HELPER FUNCTIONS
// ================================

function isTrustedDomain(url) {
  try {
    const domain = new URL(url).hostname.toLowerCase();
    return TRUSTED_DOMAINS.some(td => domain.endsWith(td));
  } catch {
    return false;
  }
}

function isSuspiciousURL(url) {
  const ipPattern = /\d{1,3}(\.\d{1,3}){3}/;
  return (
    url.includes("login") ||
    url.includes("verify") ||
    url.includes("secure") ||
    ipPattern.test(url)
  );
}

// ================================
// EMAIL SCANNING LOGIC
// ================================

function calculateRiskScore(emailBody) {
  let score = 0;
  const text = emailBody.innerText.toLowerCase();

  // Keyword check
  PHISHING_KEYWORDS.forEach(keyword => {
    if (text.includes(keyword)) score++;
  });

  // Link analysis
  emailBody.querySelectorAll("a").forEach(link => {
    const href = link.href;
    if (isSuspiciousURL(href) && !isTrustedDomain(href)) {
      score += 2;
    }
  });

  // Attachment check (basic)
  emailBody.querySelectorAll("a").forEach(link => {
    DANGEROUS_EXTENSIONS.forEach(ext => {
      if (link.href.toLowerCase().endsWith(ext)) {
        score += 3;
      }
    });
  });

  return score;
}

// ================================
// APPLY RESULTS TO GMAIL UI
// ================================

function scanEmails() {
  const emailBodies = document.querySelectorAll(".a3s");

  emailBodies.forEach(email => {
    if (email.dataset.scanned) return;

    const riskScore = calculateRiskScore(email);

    let banner = "";
    let borderColor = "";

    if (riskScore >= 5) {
      borderColor = "red";
      banner = `🚨 <b>HIGH RISK PHISHING</b> (Score: ${riskScore})`;
    } else if (riskScore >= 3) {
      borderColor = "orange";
      banner = `⚠️ <b>Suspicious Email</b> (Score: ${riskScore})`;
    } else {
      borderColor = "green";
      banner = `✅ <b>Likely Safe</b> (Score: ${riskScore})`;
    }

    email.style.border = `3px solid ${borderColor}`;
    email.insertAdjacentHTML(
      "afterbegin",
      `<div style="
        padding:6px;
        margin-bottom:6px;
        font-size:14px;
        background:#f5f5f5;
      ">${banner}</div>`
    );

    email.dataset.scanned = "true";
  });
}

// ================================
// OBSERVE GMAIL DYNAMIC CONTENT
// ================================

const observer = new MutationObserver(scanEmails);
observer.observe(document.body, { childList: true, subtree: true });

// Initial scan
scanEmails();
