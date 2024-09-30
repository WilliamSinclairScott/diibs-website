//import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@radix-ui/themes';

// const imagesToPreload = [
// ];

const Preloader: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   let loadedImages = 0;

  //   const preloadImage = (src: string) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = resolve;
  //       img.onerror = reject;
  //     });
  //   };

  //   Promise.all(imagesToPreload.map(preloadImage))
  //     .then(() => {
  //       setProgress(100);
  //       onLoadComplete();
  //     })
  //     .catch((error) => {
  //       console.error('Error preloading images:', error);
  //       onLoadComplete(); // Still complete loading even if there's an error
  //     });

  //   const updateProgress = () => {
  //     loadedImages++;
  //     setProgress((loadedImages / imagesToPreload.length) * 100);
  //   };

  //   imagesToPreload.forEach((src) => {
  //     preloadImage(src).then(updateProgress);
  //   });
  // }, [onLoadComplete]);

  return (
    <Flex direction="column" align="center" justify="center" style={{ height: '100vh' }}>
      <Text size="5" mb="4">Loading...</Text>
      {/* <Progress value={progress} /> */}
    </Flex>
  );
};

export default Preloader;