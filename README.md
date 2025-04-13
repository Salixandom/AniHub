# AniHub 🌼

🌐 **Live Site:** [AniHub](https://anihubb.netlify.app/)
> ⚠️ *Please wait 1–5 minutes and refresh the page — the database may take time to wake up after inactivity.*


AniHub is a full-stack anime discovery and streaming portal inspired by platforms like MyAnimeList, AniWave, and AniList. It allows users to browse anime, view new and upcoming shows, and receive personalized recommendations. Built using modern web technologies with a clean and responsive UI.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 🎨 TailwindCSS & Custom CSS
- 🌍 React Router DOM
- 🔥 FontAwesome Icons

### Backend
- 🖥️ Express.js
- 🐘 PostgreSQL (Hosted on Supabase)
- 📧 Nodemailer (for email features)

### Deployment
- 🔧 Frontend: [Netlify](https://www.netlify.com/)
- 🌐 Backend: [Render](https://render.com/)
- 📓 Database: [Supabase](https://supabase.io/)

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://imgur.com/wqUvKts.png)

### 🎬 Anime Details
![Anime Details](https://imgur.com/QKb2iCx.png)

### 🎯 User Recommendations
![User Recommendations](https://imgur.com/Mr6jguK.png)

### 📨 Request Anime
![Request Anime](https://imgur.com/PfyccOF.png)

### 📊 User Stats Dashboard
![User Stats](https://imgur.com/LWtWPJJ.png)


---

## 🚀 Features

- 🔍 Browse anime A-Z
- 🆕 View latest releases and upcoming shows
- 💡 Personalized anime recommendations (based on genre or user preference)
- 📩 Contact form and anime request feature
- 🎥 Background video intro with smooth animations
- 🌐 Responsive UI for all screen sizes
- 📊 Interactive dashboards with graphs on user activity, ratings, watch status, and genre trends
- 🤔 Admin/moderator panel with ban/warning/report system and content control
- 🔒 Secure password system: history restriction, brute-force prevention, strong password enforcement
- 📧 Password recovery using Nodemailer with temporary login tokens
- 📅 "Take a Break" mode (hide profile temporarily) and permanent profile deletion
- 💼 Role-based access: User, Moderator, Admin
- 🚷 Auto-comment report system triggered by excessive downvotes
- 🚰 Track anime by watching, dropped, paused, finished, watchlist
- 🔎 Advanced search by name, genre, year, season, format, censorship
- ⬆️ Sorting features for better anime discovery
- 💬 Forum creation and user interaction via replies, comments, upvotes/downvotes
- 🔍 Visit and interact with other user profiles

---

## 🧰 Installation & Setup (for Developers)

```bash
# 1. Clone the repository
git clone https://github.com/Salixandom/AniHub.git

# 2. Install dependencies for the frontend
cd AniHub/FrontEnd
npm install

# 3. Create a .env file in /FrontEnd and add:
REACT_APP_API_URL=https://your-backend-url.onrender.com

# 4. Install dependencies for the backend
cd ../Server
npm install

# 5. Create a .env file in /Server and add:
DB_HOST=your-db-host
DB_PORT=your-db-port
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
```

---

## 🧪 Run Locally

```bash
# Start the backend
cd AniHub/Server
nodemon server.js

# Start the frontend (in a new terminal)
cd ../FrontEnd
npm run dev
```

---

## 📆 Deployment

**Frontend:**
- Hosted on Netlify
- Connected to GitHub for CI/CD
- Builds automatically on main branch push

**Backend:**
- Hosted on Render
- Uses Express.js API connected to Supabase

---

## 🙋‍♂️ Author
- **Sakib** [Facebook](https://www.facebook.com/sadman.sakib.1911192) | [GitHub](https://github.com/Salixandom)
- **Taskeen** [Facebook](https://www.facebook.com/taskeen69) | [GitHub](https://github.com/Taskeen15)

---

## 📄 License
This project is open-source and free to use.
