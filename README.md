rn-clerk-qs
🚀 React Native (Expo) & Clerk Quickstart
This repository serves as a boilerplate or quickstart guide for integrating Clerk—a developer-first authentication and user management platform—into a React Native application built with Expo.

It provides a secure, fully functional authentication flow right out of the box, including sign-up, sign-in, and protected routes.

✨ Features
Secure Authentication: Full sign-up and sign-in flow using the @clerk/clerk-expo SDK.

Protected Routes: Example usage of the useAuth hook and conditional rendering/navigation to protect content only for signed-in users.

User Profile: A basic screen demonstrating how to retrieve and display signed-in user information.

Expo Router (or similar): Structure ready for modern React Native routing (assuming a common setup like Expo Router).

Secure Token Storage: Integration with expo-secure-store for safe storage of session tokens.

🛠️ Tech Stack
Framework: React Native

Environment: Expo

Authentication: Clerk (@clerk/clerk-expo)

Routing: Expo Router (or React Navigation)

Secure Storage: expo-secure-store

⚙️ Getting Started
Follow these steps to get the project running on your local machine.

Prerequisites
Node.js: Ensure you have Node.js (v18+) installed.

Expo CLI: Install the Expo CLI globally.

Bash

npm install -g expo-cli
# OR
npm install -g expo
Clerk Account: Create a free account on Clerk.

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/ibxbit/rn-clerk-qs.git
cd rn-clerk-qs
Install dependencies:

Bash

npm install
# OR
yarn install
Configure Environment Variables:

Create a file named .env in the root of your project.

Get your Publishable Key from the Clerk Dashboard (API Keys section).

Add the following line to your .env file:

Code snippet

# .env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
⚠️ Security Warning: Never commit your Secret Key to a public repository! Only the Publishable Key is safe to use in the Expo public environment variable format (EXPO_PUBLIC_...).

Run the application:

Bash

npm start
# OR
expo start
This will open the Expo Dev Tools in your browser. You can then scan the QR code with the Expo Go app on your phone (iOS or Android) or run it in a simulator/emulator.

🧭 Usage and Structure
The main application flow is structured around the user's authentication state, typically managed by the main application file (e.g., App.js or _layout.js if using Expo Router).

ClerkProvider
The entire application is wrapped in the ClerkProvider to enable access to authentication hooks and components:

JavaScript

// Example in a root file
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from './utils/tokenCache';

export default function App() {
  return (
    <ClerkProvider 
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
}
Protected Content
Use Clerk's hooks, like useAuth() and useUser(), to conditionally render components or handle navigation for signed-in users.

JavaScript

// Example of a Protected Component
import { useUser, SignedIn, SignedOut, UserButton } from "@clerk/clerk-expo";

function HomeScreen() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) return <ActivityIndicator />;

  return (
    <View>
      <SignedIn>
        <Text>Welcome back, {user.firstName}!</Text>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Text>Please sign in to continue.</Text>
      </SignedOut>
    </View>
  );
}
🤝 Contributing
Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📧 Contact
Your Name or Project Maintainer - [Your Email Address]

Project Link: https://github.com/ibxbit/rn-clerk-qs (Use your actual repo URL)

📜 License
Distributed under the MIT License. See LICENSE for more information.

(You should replace the bracketed placeholders like [Your Name or Project Maintainer] and the example link with your actual information.)