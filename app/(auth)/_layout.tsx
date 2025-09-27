import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading while checking auth status
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/(tabs)"} />;
  }

  return (
    <Stack 
      screenOptions={{
        headerShown: true,
        headerTitle: 'Welcome',
        headerBackVisible: false, // Disable back button since this is the entry point
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        // Prevent any navigation gestures that could cause issues
        gestureEnabled: false,
        animation: 'none', // Disable animations to prevent flashing
      }}
    />
  );
}