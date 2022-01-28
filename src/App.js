import './App.css';
import Searchbar from './components/Searchbar';
import Navsection from './components/Navsection';
import Contents from './components/Contents';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <hr/>
      <div className='contentsAndNavsection'>
        <Navsection />
        <hr />
        <Contents />
      </div>
    </div>
  );
}

export default App;
