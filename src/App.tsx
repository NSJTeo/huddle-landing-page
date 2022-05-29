import {
  FlowingConversations,
  GrowTogether,
  Header,
  Hero,
  Stats,
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
      </main>
    </>
  );
}

export default App;
