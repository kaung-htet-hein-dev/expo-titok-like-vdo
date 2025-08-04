import { DATA, type Video } from "@/constants/videos";
import { useCallback, useState } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import VideoPlayer from "./VideoPlayer";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");

export default function VideoList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (
      viewableItems.length > 0 &&
      viewableItems[0].index !== null &&
      viewableItems[0].index !== undefined
    ) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: Video; index: number }) => {
      return <VideoPlayer video={item} isActive={currentIndex === index} />;
    },
    [currentIndex]
  );

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      style={styles.container}
      getItemLayout={(_, index) => ({
        length: screenHeight,
        offset: screenHeight * index,
        index
      })}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
      windowSize={3}
      removeClippedSubviews={false}
      viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
      onViewableItemsChanged={onViewableItemsChanged}
      snapToInterval={screenHeight}
      snapToAlignment="start"
      decelerationRate="fast"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight
  }
});
