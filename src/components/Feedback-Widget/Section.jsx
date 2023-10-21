import React from 'react';
import { SectionContainer, SectionTitle } from './FeedbackWidgetStyled.Styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};
