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
        headerTitle: '',
        headerBackVisible: false, // Disable back button since this is the entry point
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
          color: '#fff',
        },
        headerTintColor: '#fff', // For any header icons
        // Prevent any navigation gestures that could cause issues
        gestureEnabled: false,
        animation: 'none', // Disable animations to prevent flashing
      }}
    />
  );
}