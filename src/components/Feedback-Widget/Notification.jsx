import React from 'react';
import { StyledText } from './FeedbackWidgetStyled.Styled';

export const Notification = ({ message, appreciation }) => {
  return <StyledText $appreciation={appreciation}>{message}</StyledText>;
};
