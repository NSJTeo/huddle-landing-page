import {
  CallToAction,
  FlowingConversations,
  GrowTogether,
  Header,
  Hero,
  Stats,
  YourUsers,
  NewsletterSignUp,
  Contact,
} from './components';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <GrowTogether />
        <FlowingConversations />
        <YourUsers />
        <CallToAction />
      </main>
      <footer>
        <div className="footer__background-image"></div>
        <div className="footer__content">
          <NewsletterSignUp />
          <Contact />
        </div>
      </footer>
    </>
  );
}

export default App;
