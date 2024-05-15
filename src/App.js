import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);
  //id ke basis pe tour ko remove krenge
  function removeTour(id) {
    //new tours me usko dalenge jiski id remove tour function ke id ke equal ni hogi
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    //no tours left jb hoga to refresh pe click krne se vapis saare tours ajane chaiye
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }
  //as a prop pass krenge remove tour ko taaki card.js me jaske call
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
