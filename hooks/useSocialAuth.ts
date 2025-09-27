import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    setIsLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        // Don't navigate here - let the auth layout handle the redirect
        // This prevents the flash of auth page
      }
    } catch (err) {
      console.log("Error in social auth", err);
      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      Alert.alert("Error", `Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSocialAuth };
};
