<img width="1904" height="1079" alt="Screenshot 2025-12-05 103624" src="https://github.com/user-attachments/assets/ca91ffc5-16c0-42cf-bd16-5d172f212876" />

# Ayush Ayurveda Assistant 
## A simple assistant for Ayurvedic wellness — providing Ayurveda-based guidance, herb information, dosha suggestions, and more.

## 📖 Project Overview
Ayush Ayurveda Assistant is a simple yet impactful tool designed to make traditional Ayurvedic knowledge easily accessible by allowing users to explore herbs, understand their Ayurvedic properties, and receive basic lifestyle or diet recommendations based on body type or dosha, while also offering multilingual support to overcome language barriers; its key features include an herbal lookup system, dosha-based wellness guidance, user-friendly search functionality, and language flexibility, and its use cases involve helping individuals identify herbs and their benefits, guiding users toward appropriate lifestyle and dietary choices, assisting beginners or enthusiasts in learning Ayurveda, and acting as a foundational module for building a more advanced Ayurvedic wellness web or mobile application.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Main Code Sequences & Architecture](#main-code-sequences--architecture)
  - [Frontend (React/Vite/TypeScript)](#frontend-reactvitets)
  - [Backend (Node.js/Express/MongoDB)](#backend-nodejsexpressmongodb)
- [Accessibility & Cognitive Support](#accessibility--cognitive-support)
- [Authentication](#authentication)
- [Chatbot Integration](#chatbot-integration)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)
- [Example Screenshots](#example-screenshots)
- [Deployment Instructions](#deployment-instructions)
- [Optional Enhancements](#optional-enhancements)


## Features
- **Herbal Lookup System:** Browse herbs, Ayurvedic properties, benefits, and dosha relevance.
- **Dosha-Based Suggestions:** Basic (or planned) guidance for diet/lifestyle based on Vata, Pitta, Kapha.
- **Multilingual Support:** Supports multiple Indian languages (if implemented).
- **User-Friendly Interface:** Simple, clean UI built with modern frontend tech.
- **Modular Architecture:** Easy expansion into full Ayurvedic wellness platform.
- **API-Ready Design:** Backend exposes endpoints for herbs, dosha info, and search queries.

---

## Project Structure
ayush-ayurveda-assistant/
│
├── Frontend/                     # React + Vite (TypeScript)  
│   ├── src/                      # All component code  
│   ├── index.html                # App entry file  
│   ├── package.json              # Frontend dependencies  
│   ├── vite.config.ts            # Vite setup  
│   ├── tsconfig.json             # TypeScript config  
│   ├── .env.sample               # Sample environment vars  
│   └── README.md                 # Frontend documentation  
│
├── backend/                      # Node.js + Express + MongoDB API  
│   ├── Route/                    # Routes  
│   ├── controllers/              # Logic for each route  
│   ├── models/                   # Mongoose / DB schemas  
│   ├── utils/                    # Helper utilities  
│   ├── index.js                  # Backend entry point  
│   ├── connection.js             # MongoDB connection  
│   ├── .env                      # Backend environment variables  
│   ├── .env.example  
│   └── package.json              # Backend dependencies  
│
├── scripts/  
│   └── build.js                  # Build automation (optional)  
│
├── package.json                  # Root-level metadata  
├── .gitignore  
└── index.js                      # Deployment entry (optional)

---

## Setup & Installation
### **1. Clone the Repository**
```bash
git clone https://github.com/golu19102003/ayush-ayurveda-assistant.git
cd ayush-ayurveda-assistant
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Start the Server
```bash
npm start
```
The app will be available at [https://ayush-ayurveda.netlify.app/)].

---

## Main Code Sequences & Architecture
### Frontend (React/Vite/TypeScript)
#### `index.html`
- Mounts React root element.
- Loads TypeScript build.
- Includes multilingual meta tags.

#### Core Features
- Herb Search Component — query herbs by name or property.
- Dosha Guidance UI — display recommended foods/lifestyle.
- Language Switcher — optional multilingual support.

#### Styling
- Tailwind / custom CSS (based on project).
- Responsive grid layouts.
- Clean text and high readability.
---

### Backend (Node.js/Express/MongoDB)
#### `index.js`
- Sets up Express app.
- Loads routes for herb lookup, dosha data, search API.
- Connects to MongoDB via connection.js.

#### Routes
- **/api/herbs** – fetch herb data
- **/api/herbs/:id** – fetch a specific herb
- **/api/search** – keyword-based search
- **/api/dosha** – (optional) diet/lifestyle guidance

#### Controllers
- Logic for herb filtering, search, dosha recommendations, etc.

#### Models
- Mongoose Schema for herbs, dosha metadata.

#### package.json
Dependencies: express, mongoose, cors, dotenv, etc.

---

## Accessibility & Cognitive Support
- (Include if implemented — otherwise future-scope)
- Semantic HTML
- Clean UI for easy reading
- Color contrast maintained
- Simple navigation

## Authentication
(Only include if your project uses auth — else remove)

- Optional user registration for saved herbs or personalized guidance.

Future-ready for:
- Email/password login
- Google login (via Supabase/Firebase)

## Chatbot Integration
(If implemented or planned)
- Ayurvedic Q&A chatbot using preloaded rules or LLM API
- Provides dosha info, herb details, wellness tips
- Future expansion: personalized Ayurvedic assessment

## Customization
- Add more herbs easily in /models and /controllers
- Update UI text in React components
- Add new API endpoints
- Add a full dosha calculator
---

## License
- This project is available under MIT License.
(Replace if using a different license.)
---

## Contact
For feedback, contributions, or queries:

👤 Pranjal Khandelwal

🔗 LinkedIn: https://www.linkedin.com/in/pranjal-khandelwal-1a46682a4/

💻 GitHub: https://github.com/golu19102003

🐦 Twitter: https://x.com/Pranjal76009498

📸 Instagram: https://www.instagram.com/pranjal19102003_2.0/---

---

## Example Screenshots
### AyuFit
<img width="1890" height="1079" alt="Screenshot 2025-12-05 103634" src="https://github.com/user-attachments/assets/3f689b95-9236-4ab4-8944-6be91dff1bdc" />

### AyuMed
<img width="1890" height="1079" alt="Screenshot 2025-12-05 103643" src="https://github.com/user-attachments/assets/560dd09e-8435-4da7-a386-2ebbd67c1386" />

### AyuDoctor
<img width="1895" height="1079" alt="Screenshot 2025-12-05 103651" src="https://github.com/user-attachments/assets/60121c7a-d916-44e3-a64f-a6b3c024b968" />

### AyuHospital
<img width="1893" height="1024" alt="Screenshot 2025-12-05 103707" src="https://github.com/user-attachments/assets/2b9a3319-11b9-4bcb-a62e-24af67c11de4" />

---

## Deployment Instructions
### Deploying Locally
git clone https://github.com/golu19102003/ayush-ayurveda-assistant.git
npm install
npm start

### Deploying to a Cloud Platform (e.g., Render, Heroku, Vercel)
#### Deploying Frontend (Vercel/Netlify)
- Upload Frontend/
- Set environment variable:
- VITE_API_URL=https://your-backend-url

#### Deploying Backend (Render/Heroku/Railway)
- Push backend code to GitHub
- Create a web service on the cloud platform
- Add environment variables:
MONGO_URI=your_string
PORT=5000
Deploy!

## Optional Enhancements:
- Add Rate Limiting for Public API.
- Add Global Error Handler.
- Add Loading Skeletons in React.
- Add PWA Support for Offline Access.
- Add Dark Mode Toggle.
- Add JWT-based Auth (if expanded).
