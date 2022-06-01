import { useState } from 'react';
import { NewsletterInput } from '../../styles';
import './NewsletterSignUp.scss';

export const NewsletterSignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      return setError(true);
    }
    setEmail('');
    setError(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="newsletter-sign-up__container">
      <h3 className="newsletter-sign-up__header">NEWSLETTER</h3>
      <p className="newsletter-sign-up__text">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form className="newsletter-sign-up__form" onSubmit={handleSubmit}>
        <NewsletterInput
          error={error}
          className="newsletter-sign-up__form-input"
          value={email}
          onChange={handleChange}
        />
        <button className="newsletter-sign-up__form-button" type="submit">
          Subscribe
        </button>
      </form>
      {error && (
        <p className="newsletter-sign-up__input-error">
          Check your email please
        </p>
      )}
    </div>
  );
};
