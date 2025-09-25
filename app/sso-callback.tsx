import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";

// Ensures the web auth session gets completed
WebBrowser.maybeCompleteAuthSession();

export default function SSORedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    // Once Clerk finishes, send user where you want them
    router.replace("/(tabs)");
  }, [router]);

  return null; // nothing to render
}
