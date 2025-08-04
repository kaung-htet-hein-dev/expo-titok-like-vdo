import { type Video } from "@/constants/videos";
import { Ionicons } from "@expo/vector-icons";
import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const VideoPlayer = ({
  video,
  isActive
}: {
  video: Video;
  isActive: boolean;
}) => {
  const player = useVideoPlayer(video.src, (player) => {
    player.loop = true;
    player.pause();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });

  const [showControls, setShowControls] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isActive) {
      player.play();
    } else {
      setShowControls(false);
      player.pause();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive]);

  useEffect(() => {
    return () => {
      console.log("VideoPlayer unmounted", video.id);
    };
  }, []);

  const handleVideoPress = () => {
    if (!isActive) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setShowControls(true);

    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }

    timerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={handleVideoPress}
        activeOpacity={1}
      >
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen={false}
          allowsPictureInPicture={false}
          nativeControls={false}
          contentFit="cover"
        />

        {/* Play/Pause Icon Overlay */}
        {showControls && isActive && (
          <View style={styles.playPauseOverlay}>
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={80}
              color="rgba(255, 255, 255, 0.8)"
            />
          </View>
        )}
      </TouchableOpacity>

      {/* Video Info Overlay */}
      <View style={styles.infoOverlay}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.description}>{video.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "black"
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight
  },
  video: {
    width: screenWidth,
    height: screenHeight,
    position: "absolute",
    top: 0,
    left: 0
  },
  playPauseOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  infoOverlay: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 80,
    zIndex: 1
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  description: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  }
});

export default VideoPlayer;
