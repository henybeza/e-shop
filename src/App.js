import React, {  useState } from 'react';
import { Button } from '@material-ui/core';
 
import Header from './Components/Header';
import Items from './Components/Items';
import './App.css';
function App() {
  const [counter, setCounter] = useState(0);
  const increamentCounter = () => {setCounter(counter+1);};
  const itemStyle={display:"flex", backgroundColor:"red", margin:"10px",justifyContent:"center"};
  return (
    <div className="App">
      <Header />
      <div style={itemStyle}>
      <Items />
      <Items />
      <Items />
      <Items />
      </div>
      
      <MyButton handleClick= {increamentCounter} name="Add to Cart" />
      <Display myCounter={counter}/>
      <YourButton name="ORDER NOW"/>
    </div>
  );
}

function MyButton(props){
  const {handleClick, name}= props;
  return (
    <div>   
    <Button onClick={handleClick} variant="contained" color="secondary">
      {name}
    </Button>   
    </div>
  );
}

function Display(props){
  const {myCounter} = props;
return (
  <div><h1>{myCounter}</h1></div>
);
}

 function YourButton(props){
   const [counter, setCounter] = useState(0);
   const increamentCounter = ()=>{setCounter(counter+1);}
   return(
     <div>
     <h1>{props.name}</h1>
      <Button onClick={increamentCounter} variant="contained" color="primary">
        
        {counter}
      </Button>
     </div>
   );
 }

export default App;
