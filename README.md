# Extintores Santander – Corporate Website Simulation

This project is a **frontend simulation** of a real-world fire extinguisher company website called *Extintores Santander*.

It was developed to simulate a corporate e-commerce website using **HTML, CSS, Bootstrap, and Vanilla JavaScript**, including user registration, login system, shopping cart functionality, news integration, and weather API consumption.

This is a simulation project. No real payments, authentication systems, or databases are implemented.

---

## Project Overview

The website simulates:

- Corporate presentation homepage
- Product catalog with shopping cart
- Purchase form
- User registration and login (LocalStorage-based)
- News section using an external API
- Weather information using OpenWeather API

All dynamic functionality is handled using JavaScript and browser LocalStorage.

---

## Main Features

### Shopping Cart (LocalStorage-Based)
- Add products to cart
- Increase/decrease quantity
- Remove products
- Persist cart data using `localStorage`
- Sidebar cart interface
- Purchase simulation with success alert

### User Authentication (Simulated)
- User registration stored in `localStorage`
- Login validation against stored users
- Login state saved locally (no real backend authentication)

### News Integration
- Fetches real-time news from **NewsAPI**
- Search functionality
- Dynamic rendering of articles

### Weather Integration
- Fetches real-time weather data from **OpenWeather API**
- Displays:
  - Temperature
  - Humidity
  - Wind speed
  - Pressure
  - Country and city

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript (ES6)
- LocalStorage API
- Fetch API
- NewsAPI (external API)
- OpenWeather API

---

## Project Structure

```
├── css/
│ ├── style.css
│ ├── compra.css
│ ├── registro.css
│ ├── login.css
│ ├── climaStyles.css
│ ├── noticiasStyles.css
│ └── extinStyles.css
│
├── js/
│ ├── script.js (Shopping cart logic)
│ ├── compra.js (Purchase simulation)
│ ├── login.js (Login simulation)
│ ├── registro.js (User registration)
│ ├── noticias.js (News API integration)
│ └── clima.js (Weather API integration)
│
├── img/
│ └── (Images and media files)
│
└── pages/
├── catalogo.html
├── compra.html
├── login.html
├── registro.html
├── noticias.html
└── clima.html
```
---

## How to Run the Project

Since this is a static project, no backend or server setup is required.

### Option 1 – Using Live Server (Recommended)

1. Open the project folder in **Visual Studio Code**
2. Right-click on `index.html`
3. Select **"Open with Live Server"**

### Option 2 – Open Directly

You can open `index.html` directly in your browser.

---

## Important Notes

- The shopping cart does **not process real payments**
- The login system does **not connect to a database**
- All data is stored locally in the browser
- API keys are exposed because this is a learning project (not production-ready)

---

## Purpose of the Project

This project was built to:

- Practice frontend architecture
- Simulate real-world e-commerce logic
- Work with LocalStorage
- Consume external APIs
- Improve DOM manipulation skills
- Structure a multi-page website properly

---

## Possible Improvements

- Implement backend authentication (Node.js / Flask)
- Connect to a real database (MongoDB / MySQL)
- Implement JWT authentication
- Add payment gateway integration
- Improve UI/UX and responsiveness
- Deploy on GitHub Pages or Vercel

---

## Disclaimer

This project is for educational purposes only.  
It simulates the behavior of a commercial website but does not represent a production-ready system.

---

# Author

Iván David Caro Vargas  
Aspiring Full Stack Developer  

---
