import './App.css';

import { About, Footer, Header, Skills, Testimonials, Works} from './container';
import {Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <Navbar />
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
