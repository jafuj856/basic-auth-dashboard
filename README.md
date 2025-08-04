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

## 🔗 PocketBase API

This project is built to work with a PocketBase backend for authentication and data handling.

### 🔄 Note:
The task originally provided the following PocketBase instance:

- **Base URL:** https://pb.devpgs.app/_/
- **Test Credentials:**  
  - Email: test@devpgs.app  
  - Password: Test@1234!

However, during testing, I was **unable to connect** to that server (possibly due to downtime or CORS/network issues).  
So, I hosted my own PocketBase instance on Render for demonstration purposes:

### ✅ Active Instance Used in This Project

- **Base URL:** https://pocketbase-server-fnr2.onrender.com

You can register a new user or test with any email/password combination on this instance.

---

If needed, the backend repo or setup instructions for the PocketBase instance can be shared as well.





