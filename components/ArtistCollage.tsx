import React from 'react';
import { Dimensions, Image, View } from 'react-native';

const { width, height } = Dimensions.get('window');

// Artist images array
const artistImages = [
  require("../assets/images/Musica/1H.png"),
  require("../assets/images/Musica/2H.png"),
  require("../assets/images/Musica/14H.png"),
  require("../assets/images/Musica/2rv.png"),
  require("../assets/images/Musica/8H.png"),
  require("../assets/images/Musica/3lv.png"),
  require("../assets/images/Musica/15H.png"),
  require("../assets/images/Musica/3H.png"),
  require("../assets/images/Musica/4lv.png"),
  require("../assets/images/Musica/2lv.png"),
  require("../assets/images/Musica/3rv.png"),
  require("../assets/images/Musica/7H.png"),
  require("../assets/images/Musica/4H.png"),
  require("../assets/images/Musica/11H.png"),
  require("../assets/images/Musica/10H.png"),
  require("../assets/images/Musica/5lv.png"),
  require("../assets/images/Musica/4rv.png"),
  require("../assets/images/Musica/4H.png"),
  require("../assets/images/Musica/6H.png"),
];

// Predefined positions for better layout control - full screen coverage
const artistPositions = [
  { x: -10, y: 0, size: 90 },  // 1 - top edge
  { x: 86, y: 30, size: 90 }, // 2 horizontal
  { x: 100, y: 300, size: 50 }, // 14 horizontal
  { x: 340, y: 120, size: 80 }, // 2  right down
  { x: 260, y: 66, size: 75 }, // 8 horizontal
  { x: -19, y: 170, size: 90 }, // 3 left down
  { x: 250, y: 250, size: 70 }, // 15 horizontal
  { x: 190, y: 0, size: 60 }, // 3 horizontal - top edge
  { x: 30, y: 260, size: 65 }, // 4 vertical
  { x: 90, y: 160, size: 80 }, // xxx
  { x: 340, y: 240, size: 90 }, // 3 right down
  { x: 170, y: 100, size: 70 }, // 7 horizontal
  { x: 16, y: 60, size: 90 }, // 2 left down
  { x: 250, y: 150, size: 75 }, // 11 horizontal
  { x: 160, y: 220, size: 90 }, // 10 horizontal
  { x: -17, y: 320, size: 80 }, // 4 left down
  { x: 340, y: 0, size: 80 }, // 4 horizontal - top edge
  { x: 290, y: 330, size: 80 },
  { x: 60, y: 360, size: 100 },
];

export default function ArtistCollage() {
  return (
    <View className="absolute inset-0">
      {artistImages.slice(0, 20).map((image, index) => {
        const position = artistPositions[index] || artistPositions[0];
        return (
          <Image
            key={index}
            source={image}
            style={{
              position: 'absolute',
              left: position.x,
              top: position.y,
              width: position.size,
              height: position.size,
              borderRadius: position.size / 2,
              opacity: 0.85,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
            resizeMode="cover"
          />
        );
      })}
    </View>
  );
}
