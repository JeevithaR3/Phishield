🛡️ PhishShield
AI-Powered Real-Time Phishing Website Detection Chrome Extension

Problem Statement

Phishing attacks are rapidly increasing through fake websites and shortened malicious links that look identical to legitimate ones. Users cannot easily identify these phishing pages, and most existing tools rely on blacklists, which fail to detect new and zero-day attacks.

Our Solution

PhishShield is a lightweight AI-powered Chrome extension that detects phishing websites in real time. It scans the current webpage, expands shortened URLs, and uses machine learning models to identify phishing patterns within one second — protecting users before they enter sensitive information.

Features

Real-time website phishing detection
Shortened URL expansion (bit.ly, tinyurl, etc.)
AI-based detection (BERT + XGBoost)
Instant warning alerts
Lightweight (<1 MB) Chrome extension
Secure login using Firebase Authentication
Threat history stored in Firebase Firestore

Technology Stack

Frontend
Chrome Extension API
React.js
Tailwind CSS

Backend & AI
Python
FastAPI
BERT
XGBoost

Google Technologies
Firebase Authentication
Firebase Firestore
Google Safe Browsing API
Google Chrome Extensions Ecosystem

System Architecture

User → Chrome Browser → PhishShield Extension → FastAPI Server
                                   ↓
                            AI Models (BERT + XGBoost)
                                   ↓
                         Google Safe Browsing Verification
                                   ↓
                        Result → Warning → Firebase Storage

🔄 Project Working Flow
User logs in using Firebase Authentication
User opens a website
PhishShield captures the URL and page content
Shortened URLs are expanded
Data is sent to FastAPI backend
AI models analyze phishing patterns
Google Safe Browsing verifies known threats
Site is classified as Safe or Phishing
Warning is shown if phishing is detected
Result is stored in Firebase Firestore

How to Run the Project

# Step 1 – Clone the repository
git clone https://github.com/JeevithaR3/Phishield

# Step 2 – Go to project folder
cd Phishield

# Step 3 – Install dependencies
npm install

# Step 4 – Run the frontend
npm run dev

📽 Demo

https://drive.google.com/drive/folders/1TS5_8WgvVvPXJ7lYqHT_6LRswJXvu_R5?usp=sharing

🌍 Impact

PhishShield helps protect:
Online banking users
E-commerce shoppers
Students and employees
Everyday internet users
From phishing, data theft, and financial fraud.

👥 Team

PhishShield – Hackathon Project  
Built for AI-powered cyber security  

Team Members:  
- Jeevitha R  
- Jeevitha L Shetty  
- Srividisha MS
 


