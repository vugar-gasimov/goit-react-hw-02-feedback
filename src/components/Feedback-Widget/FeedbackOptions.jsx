import React from 'react';
import {
  FeedbackContainer,
  FeedbackButton,
} from './FeedbackWidgetStyled.Styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <FeedbackButton
          key={crypto.randomUUID()}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};
