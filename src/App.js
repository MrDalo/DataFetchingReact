import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import List from './List';

function App() {

  const [items, setItems] = useState([]);
  const [dataState, setDataState] = useState('posts');
  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchData = async () => {
      
      try{
        const response = await fetch(`${API_URL}${dataState}`);
        const listItems = await response.json();
        setItems(listItems);
        // console.log(listItems);

      }catch (error){
        console.log(error.stack);
      }
    }

    fetchData();

  }, [dataState]);

  return (
    <>
      <Buttons dataState={dataState} setDataState={setDataState}/>
      {/* hello wolrd! {JSON.stringify(items).map} */}

      <ul>
        {items.map(item => (<List key={item.id} item={item}/>))}

      </ul>
    </>
  );
}

export default App;
