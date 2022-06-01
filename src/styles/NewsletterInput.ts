import styled from 'styled-components';

type NewsletterInputProps = {
  error: Boolean;
};

export const NewsletterInput = styled.input<NewsletterInputProps>`
  background: #ffffff;
  height: 48px;
  border-radius: 6px;
  border: ${({ error }) => (error ? '1px solid #FF4343' : 'none')};
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 40px;
    flex-grow: 1;
  }
`;
