import ArtistCollage from "@/components/ArtistCollage";
import { useSocialAuth } from "@/hooks/useSocialAuth";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { height } = Dimensions.get('window');

export default function Index() {
  const { handleSocialAuth, isLoading } = useSocialAuth();

  return (
    <View className="flex-1 bg-black">
      {/* Artist Collage Background */}
      <ArtistCollage />

      <View className="flex-1 px-8 justify-between">
        {/* Spacer for top section */}
        <View style={{ height: height * 0.15 }} />

        {/* Center Section - Empty for full artist collage visibility */}
        <View className="flex-1 justify-center items-center">
          {/* Empty space to let artist collage be the main focus */}
        </View>

        {/* Bottom Section with Auth Buttons */}
        <View className="pb-8">
          <View className="flex-col gap-4">
            {/* GOOGLE SIGNIN BTN */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-transparent border border-white rounded-full py-4 px-6"
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <View className="flex-row items-center justify-center">
                  <Image
                    source={require("../../assets/images/google.png")}
                    className="w-6 h-6 mr-3"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-medium text-base">Continue with Google</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* APPLE SIGNIN BTN */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-transparent border border-white rounded-full py-4 px-6"
              onPress={() => handleSocialAuth("oauth_apple")}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <View className="flex-row items-center justify-center">
                  <View className="mr-3">
                    <Ionicons name="phone-portrait-outline" size={24} color="#fff" />
                  </View>
                  <Text className="text-white font-medium text-base">Continue with iOS</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Terms and Privacy */}
          <Text className="text-center text-gray-400 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our <Text className="text-white">Terms</Text>
            {", "}
            <Text className="text-white">Privacy Policy</Text>
            {", and "}
            <Text className="text-white">Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
}
