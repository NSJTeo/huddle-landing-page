import yourUsersIllustration from '../../assets/illustrations/illustration-your-users.svg';
import './YourUsers.scss';

export const YourUsers = () => {
  return (
    <div className="your-users__container">
      <div className="your-users__background-image--top" />
      <div className="your-users__body">
        <div className="your-users__illustration-container">
          <img
            className="your-users__illustration"
            src={yourUsersIllustration}
            alt=""
          />
        </div>
        <h3 className="your-users__header">Your Users</h3>
        <p className="your-users__text">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <div className="your-users__background-image--bottom" />
    </div>
  );
};
