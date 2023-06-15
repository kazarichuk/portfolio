import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This will make it full screen. Adjust if you want a different size.
  }}>
    <ThreeDots 
      type="ThreeDots"
      color="#4065E8" // Change the color here
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
  </div>
);

export default Loading;
