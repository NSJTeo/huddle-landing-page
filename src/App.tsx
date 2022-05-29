import {
  CallToAction,
  FlowingConversations,
  GrowTogether,
  Header,
  Hero,
  Stats,
  YourUsers,
} from './components';

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
    </>
  );
}

export default App;
