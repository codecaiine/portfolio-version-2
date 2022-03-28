import './App.css';

import { About, Footer, Header, Skills, Testimonials, Works} from './container';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
