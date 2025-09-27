# ⚛️ RN Clerk Quickstart

## 🛡️ Authentication Boilerplate with React Native & Clerk

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![Tech Stack: React Native](https://img.shields.io/badge/Framework-React%20Native-61DAFB.svg?style=flat&logo=react)](https://reactnative.dev/) 
[![Auth: Clerk](https://img.shields.io/badge/Auth-Clerk-3A38CD.svg?style=flat&logo=clerk)](https://clerk.com/)



A fully functional, secure authentication quickstart project using **Clerk** and **React Native** (via Expo). This boilerplate includes protected routes, user profile management, and session handling, ready for you to build your mobile application features on top of a solid auth foundation.

---

## ✨ Features

* **Integrated Auth Flow:** Complete sign-up, sign-in, and sign-out functionality.
* **Secure Storage:** Uses **`expo-secure-store`** for safe storage of session tokens.
* **Protected Routing:** Demonstrates route guarding (e.g., using **Expo Router**) to redirect authenticated/unauthenticated users.
* **Profile Management:** Example of fetching and displaying the signed-in user's data.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You'll need a few tools installed:

* **Node.js** (LTS version recommended)
* **Expo CLI** (`npm install -g expo`)
* A **Clerk Account**: [Sign up for free](https://clerk.com/signup).

### Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/ibxbit/rn-clerk-qs.git](https://github.com/ibxbit/rn-clerk-qs.git)
    cd rn-clerk-qs
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set Environment Variables**

    * Create a file named **`.env`** in the project root.
    * Get your **Clerk Publishable Key** (`pk_live_...`) from your Clerk Dashboard.
    * Add the key to your `.env` file using the Expo public format:

    ```env
    # .env
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_publishable_key_here"
    ```
    > ⚠️ **IMPORTANT:** Never commit your Clerk Secret Key to GitHub.

---

## ▶️ Running the App

Start the Expo development server and run the app on your device or emulator.

```bash
npm start
# or
expo start


