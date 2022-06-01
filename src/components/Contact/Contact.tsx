import './Contact.scss';
import logoWhite from '../../assets/misc/logo-white.svg';
import phoneIcon from '../../assets/icons/icon-phone.svg';
import emailIcon from '../../assets/icons/icon-email.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';

export const Contact = () => {
  return (
    <div className="contact__container">
      <img className="contact__logo" src={logoWhite} alt="" />
      <p className="contact__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <div className="contact__phone-email-container">
        <img className="contact__phone-email-icon" src={phoneIcon} alt="" />
        <p className="contact__phone-email">Phone: +1-543-123-4567</p>
      </div>
      <div className="contact__phone-email-container contact__phone-email-container--last">
        <img className="contact__phone-email-icon" src={emailIcon} alt="" />
        <p className="contact__phone-email">example@company.com</p>
      </div>
      <div className="contact__social-media-icons">
        <img className="contact__social-media-icon" src={facebookIcon} alt="" />
        <img
          className="contact__social-media-icon"
          src={instagramIcon}
          alt=""
        />
        <img className="contact__social-media-icon" src={twitterIcon} alt="" />
      </div>
    </div>
  );
};
