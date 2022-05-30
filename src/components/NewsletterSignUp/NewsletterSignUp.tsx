import './NewsletterSignUp.scss';

export const NewsletterSignUp = () => {
  return (
    <div className="newsletter-sign-up__container">
      <h3 className="newsletter-sign-up__header">NEWSLETTER</h3>
      <p className="newsletter-sign-up__text">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form className="newsletter-sign-up__form">
        <input className="newsletter-sign-up__form-input" />
        <button
          className="newsletter-sign-up__form-button"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
