export interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
}

export const DATA = Array.from({ length: 10000 }, (_, index) => ({
  id: (index + 1).toString(),
  title: `Sample Video ${index + 1}`,
  description: `This is a sample video description for video ${index + 1}.`,
  src: require(`../assets/videos/9.mp4`)
}));

// export const DATA: Video[] = [
//   {
//     id: "1",
//     title: "Sample Video 1",
//     description: "This is a sample video description for video 1.",
//     src: require("../assets/videos/1.mp4")
//   },
//   {
//     id: "2",
//     title: "Sample Video 2",
//     description: "This is a sample video description for video 2.",
//     src: require("../assets/videos/2.mp4")
//   },
//   {
//     id: "3",
//     title: "Sample Video 3",
//     description: "This is a sample video description for video 3.",
//     src: require("../assets/videos/3.mp4")
//   },
//   {
//     id: "4",
//     title: "Sample Video 4",
//     description: "This is a sample video description for video 4.",
//     src: require("../assets/videos/4.mp4")
//   },
//   {
//     id: "5",
//     title: "Sample Video 5",
//     description: "This is a sample video description for video 5.",
//     src: require("../assets/videos/5.mp4")
//   },
//   {
//     id: "6",
//     title: "Sample Video 6",
//     description: "This is a sample video description for video 6.",
//     src: require("../assets/videos/6.mp4")
//   },
//   {
//     id: "7",
//     title: "Sample Video 7",
//     description: "This is a sample video description for video 7.",
//     src: require("../assets/videos/7.mp4")
//   },
//   {
//     id: "8",
//     title: "Sample Video 8",
//     description: "This is a sample video description for video 8.",
//     src: require("../assets/videos/8.mp4")
//   },
//   {
//     id: "9",
//     title: "Sample Video 9",
//     description: "This is a sample video description for video 9.",
//     src: require("../assets/videos/9.mp4")
//   },
//   {
//     id: "10",
//     title: "Sample Video 10",
//     description: "This is a sample video description for video 10.",
//     src: require("../assets/videos/10.mp4")
//   }
// ];
