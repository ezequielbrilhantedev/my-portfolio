import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div id="App" className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
