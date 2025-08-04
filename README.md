# TikTok-Style Video Player

A high-performance, TikTok-inspired vertical video player built with React Native and Expo. Features full-screen video playback, smooth vertical scrolling, and optimized performance for mobile devices.

![Demo](./assets/images/demo.gif)

## Implementation

### Video Player Optimization

- **Conditional Playback**: Only the visible video plays using `isActive` prop - inactive videos are paused to save CPU and battery
- **expo-video**: Uses native video player with hardware acceleration and `contentFit="cover"` for full-screen scaling

### FlatList Memory Management

- **Smart Rendering**: `initialNumToRender={3}` and `maxToRenderPerBatch={3}` limit initial memory usage
- **Component Recycling**: `windowSize={5}` keeps only 5 screen heights of components in memory, automatically unmounting distant items
- **Layout Optimization**: `getItemLayout` pre-calculates dimensions, enabling instant scrolling without layout calculations
- **Stable References**: `useCallback` for `onViewableItemsChanged` prevents FlatList re-initialization and memory leaks

## 🚀 Get started

1. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the app

   ```bash
   npx expo start
   # or
   yarn start
   ```
