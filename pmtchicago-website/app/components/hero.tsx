import React from 'react';
import styled from '@emotion/styled';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const SignUpButton = styled.a`
  display: inline-block;
  background-color: #0070f3;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>PMT Chicago</Title>
      <Subtitle>Join our club and stay updated on our events and activities</Subtitle>
      <SignUpButton href="https://your-google-form-url-here" target="_blank" rel="noopener noreferrer">
        Sign Up
      </SignUpButton>
    </HeroContainer>
  );
};

export default Hero;