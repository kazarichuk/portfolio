import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000617; /* Add the desired background color here */
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #00ADB5;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
