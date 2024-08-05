import React from 'react';
import { StyledErrorText } from './style';

interface ErrorTextProps {
  message: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ message }) => (
  <StyledErrorText>{message}</StyledErrorText>
);

export default ErrorText;