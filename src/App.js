
import './App.css';
import Cards from './component/Cards';
import {tarifs} from './component/data/tarifs'


function App() {
  return (
    <div className="App">
    {
      tarifs.map((tarif) =>
      <Cards tarif={tarif.tarif} cost={tarif.cost} gigabytes={tarif.gigabytes} text={tarif.text}/>)
    }
     
    </div>
  );
}

export default App;
