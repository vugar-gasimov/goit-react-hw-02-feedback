import React from 'react';
import { SectionContainer, SectionTitle } from './AppStyled.Styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};
