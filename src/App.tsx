import './App.scss';
// import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { MyStack } from './pages/MyStack/MyStack';

function App() {
  return (
    <div id="App" className="container">
      {/* <Navbar />
      <Outlet /> */}
      <Navbar />
      <Home />
      <MyStack />
      <About />
    </div>
  );
}

export default App;
