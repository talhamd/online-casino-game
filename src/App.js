import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './Components/Container/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {  
    if(localStorage.getItem('balance') && localStorage.getItem('balance') != undefined && localStorage.getItem('balance') > 0){
        setBalance(localStorage.getItem('balance'))
    }else{
        setBalance(10);
        localStorage.setItem('balance', 10)
    }
   },[])

  useEffect(() => {  
    if(localStorage.getItem('balance') && localStorage.getItem('balance') != undefined && localStorage.getItem('balance') > 0){
        setBalance(localStorage.getItem('balance'))
    }
   },[balance])

   const updateBlance =(val) =>{
       setBalance(val);
   }

  return (
    <div className="App">
    <Header balance={balance}/>
    <Content updateBlance={updateBlance}/>
    <Footer/> 
    </div>
  );
}

export default App;
