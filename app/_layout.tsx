import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack 
        screenOptions={{ 
          headerShown: false,
          animation: 'none', // Disable animations to prevent flashing
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="sso-callback" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  )
}
