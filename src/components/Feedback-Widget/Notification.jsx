import React from 'react';
import { StyledText } from '../AppStyled.Styled';

export const Notification = ({ message, appreciation }) => {
  return <StyledText $appreciation={appreciation}>{message}</StyledText>;
};
