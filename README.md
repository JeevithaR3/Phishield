#  PhishShield  
### *AI-Powered Real-Time Phishing Website Detection Chrome Extension*

---

##  Problem Statement

Phishing attacks are rapidly increasing through fake websites and shortened malicious links that look identical to legitimate ones. Users cannot easily identify these phishing pages, and most existing tools rely on blacklists, which fail to detect new and zero-day attacks.

---

##  Our Solution

PhishShield is a lightweight AI-powered Chrome extension that detects phishing websites in real time. It scans the current webpage, expands shortened URLs, and uses machine learning models to identify phishing patterns within one second — protecting users before they enter sensitive information.

---

##  Features

-  Real-time website phishing detection  
-  Shortened URL expansion (bit.ly, tinyurl, etc.)  
-  AI-based detection (BERT + XGBoost)  
-  Instant warning alerts  
-  Lightweight (< 1 MB) Chrome extension  
-  Secure login using Firebase Authentication  
-  Threat history stored in Firebase Firestore

---

##  Technology Stack

### Frontend
- Chrome Extension API  
- React.js  
- Tailwind CSS  

### Backend & AI
- Python  
- FastAPI  
- BERT  
- XGBoost  

### Google Technologies
- Firebase Authentication  
- Firebase Firestore  
- Google Safe Browsing API  
- Google Chrome Extensions Ecosystem

---

##  System Architecture

```
User
↓
Chrome Browser
↓
PhishShield Extension
↓
FastAPI Server
↓
Google Safe Browsing Verification
↓
Result → Warning
```

---

## Project Working Flow

1. User logs in using Firebase Authentication  
2. User opens a website  
3. PhishShield captures the URL and page content  
4. Shortened URLs are expanded  
5. Data is sent to FastAPI backend  
6. AI models analyze phishing patterns  
7. Google Safe Browsing verifies known threats  
8. Site is classified as **Safe** or **Phishing**  
9. Warning is shown if phishing is detected  
10. Result is stored in Firebase Firestore  

---

##  How to Run the Project

# Step 1 – Clone the repository
git clone https://github.com/JeevithaR3/Phishield

# Step 2 – Go to project folder
cd Phishield

# Step 3 – Install dependencies
npm install

# Step 4 – Run the frontend
npm run dev

---
## Running the AI Phishing Detection Module

PhishShield includes a local engine that powers the real-time phishing detection.
To run the detection system, follow these steps:

# Step 1 – Navigate to the AI module
cd PhishShield_Extension

# Step 2 – Install Python dependencies
pip install pandas numpy scikit-learn joblib flask

# Step 3 – Train the phishing detection model
python run_algorithms.py

_This trains the Neural Network, Random Forest, and SVM models and saves the trained SVM as:_
svm_model.pkl

# Step 4 – Load the Chrome Extension
```
Open Chrome
Go to chrome://extensions
Enable Developer Mode
Click Load Unpacked
Select the PhishShield_Extension folder

# Step 4.1 – Load the Chrome Extension to detect phishing_emails
```
Open Chrome
Go to chrome://extensions
Enable Developer Mode
Click Load Unpacked
Select the phish_emails

The PhishShield icon will appear in the browser.

# Step 5 – Test phishing detection
Open any website.
If a phishing site is detected, PhishShield will show a warning banner.

---

##  Demo
https://drive.google.com/drive/folders/1TS5_8WgvVvPXJ7lYqHT_6LRswJXvu_R5?usp=sharing

---

##  Impact

PhishShield helps protect:
Online banking users
E-commerce shoppers
Students and employees
Everyday internet users
From phishing, data theft, and financial fraud.

---

##  Team

PhishShield – Hackathon Project  
_Built for AI-powered cyber security_  

_Team Members:_  
- Jeevitha R  
- Jeevitha L Shetty  
- Srividisha MS
 


