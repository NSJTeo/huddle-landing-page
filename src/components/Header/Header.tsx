import logo from '../../assets/misc/logo.svg';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="huddle logo" />
      <button className="header__button">Try It Free</button>
    </div>
  );
};
