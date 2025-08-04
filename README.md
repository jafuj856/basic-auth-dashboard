# 🔐 Auth-Protected Dashboard with PocketBase + React

A simple authentication flow using PocketBase as the backend, with route protection, persistent login, and a responsive dashboard built using React and your chosen libraries.

---

## 🚀 Features

- ✅ Authentication with PocketBase  
- ✅ Route protection using `PrivateRoute` wrapper  
- ✅ Auth state persisted across page reloads (via `localStorage` or global state)  
- ✅ Toast messages for login/logout success and errors  
- ✅ Responsive layout for mobile & desktop  
- ✅ Clean, reusable components  
- ✅ Subtle animations and loading states  

---

## 🛠 Tech Stack

- **Frontend:** React vite js (with React Router)  
- **Styling:** Tailwind CSS / MUI (specify which one was used)    
- **Backend:** [PocketBase](https://pocketbase.io/)  
- **Extras:** React Toast 

---

## 📦 Getting Started

### 1. Clone the repo
```
git clone https://github.com/jafuj856/planet-green.git
cd planet-green
```
---
## 2. Install dependencies
```
npm install
```
## 3. Run the app

```
npm run dev
```
 ## How It Works
 
1. Register using the required details.

2. Upon successful registration, you will be navigated to the dashboard.

3. Log in with the registered email and password (after logging out).

4. Use the Logout button (last item in the sidebar) to end the session.



