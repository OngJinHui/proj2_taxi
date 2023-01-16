import './App.css';
// import the API connection
import ConnAPI from "./api/ConnAPI";
import CountNearby from './CountNearby';
// import Table from "./components/Table";
// import AddForm from "./components/AddForm";
import { useState, useEffect } from "react";

function App() {
  const [coordPairs, setCoordPairs] = useState([]);

  // function that gets the data from the API
  const apiGet = async () => {
    try {
      const response = await ConnAPI.get("/Taxi-Availability");

      // console.log(response.data.value);
      do {
        setCoordPairs(response.data.value);
        console.log('updating state');
      }
      while (coordPairs === []);
      
      console.log(coordPairs);
    } catch (error) {
      console.log(error.message);
    }
  }

  // saves the new entry in the database
  // const apiPost = async (newProduct) => {
  //   try {
  //     // syntax of a post if we want to send data
  //     // .post(endpoint, data for new item)
  //     const response = await connAPI.post('/product', newProduct);
  //     console.log(response.data);
  //     // call apiGet to repopulate the data
  //     apiGet();
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // before the return,
  // use the useEffect hook to run apiGet when the application starts
  // useEffect(() => {
  //   apiGet();
  // }, []);

  return (
    <div className="App">
      <h1>Taxi Availability App</h1>
      <button onClick = {apiGet}>Count of nearby Taxis</button>
      <CountNearby />
      {/* <CountNearby latLon = {response.data.value} /> */}
      {/* conditional rendering */}
      {/* {products && <Table list = {products} />}
      <AddForm handlerAddItem = {apiPost} /> */}
    </div>
  );
}

export default App;