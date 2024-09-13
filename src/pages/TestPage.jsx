// //Written as example

// import React, { useState, useEffect } from 'react';

// const VideoPlayer = ({ videoId }) => {


//   //Video data used for VideoItem props
//   const [videoData, setVideoData] = useState(null);
//   const [videoId, setVideoId] = useState(null)

//   // useEffect with dependency array
//   useEffect(() => {
//     if (videoId) {
//       // Fetch video details whenever videoId changes
//       fetch(`http://localhost:5000/api/videos/${videoId}`)
//         .then(response => response.json())
//         //Set video data for VideoItem based on API call
//         .then(data => setVideoData(data));
//     }
//   }, [videoId]); // Dependency Array: 
//                   //object is impacted each time videoId changes


//   return (
//     //VideoItem and Input Form



//   );

