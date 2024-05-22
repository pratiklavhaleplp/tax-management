import './App.css';
import FinalOutput from './components/FinalOutput';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import UserInfo from './components/User-Info';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserInfo />
        <Routes>
          <Route path='/home' Component={Home}></Route>
          <Route path='/showBooksAndGstr' Component={FinalOutput}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
