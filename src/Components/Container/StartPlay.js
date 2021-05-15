
import React, { useState, useEffect} from 'react';

function StartPLay({gameClosed,updateBlance, saveGameResults}) {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [isPlay, setIsPlay] = useState(false)
    // const [gameResults, setGameResults] = useState({})

    useEffect(()=>{
        if(localStorage.getItem('balance') > 0){
            setIsPlay(true)
        }
    })

    const updateState = () =>{
        let rn1= Math.floor(Math. random() * 9) +1;
        let rn2= Math.floor(Math. random() * 9) +1;
        let rn3= Math.floor(Math. random() * 9) +1;
        setNum1(rn1);
        setNum2(rn2);
        setNum3(rn3);
        if(localStorage.getItem('balance') > 0){
            if(localStorage.getItem('balance') == 1){
                setIsPlay(false)
            }
            let rmainingBalance = localStorage.getItem('balance') - 1;
            localStorage.setItem('balance',rmainingBalance)
        }
        let result = {
            rn1,
            rn2,
            rn3
        }
        return result;
    }

    const spin = async() => {
        
        let resp = await updateState();
        const {rn1,rn2, rn3} = resp;
        let earnDoller = 0;

        if((rn1 != rn2) && (rn1 != rn3) && (rn2 !=rn3)){
            earnDoller = 0;
        }else if((rn1 == rn2 && rn1 != rn3 && rn2 !=rn3) || 
                (rn1 != rn2 && rn1 != rn3 && rn2 == rn3) || 
                (rn1 != rn2 && rn1 == rn3 && rn2 !=rn3)){
            earnDoller = 0.5;
        } else if(rn1 ==7 && rn2 == 7 && rn3 ==7){
            earnDoller = 10;

        } else if((rn1 == rn2) && (rn1 == rn3) && (rn2 ==rn3)) {
            earnDoller = 5;
        }
        let balance = parseFloat(localStorage.getItem('balance')) + parseFloat(earnDoller);
        
        localStorage.setItem('balance',balance)
        updateBlance(localStorage.getItem('balance'));
        var d = new Date();
        let data = {
            id: Math.floor(Math. random() * 99),
            sloats: rn1+"-"+rn2+"-"+rn3,
            time:d.toLocaleString()
        }
        saveGameResults(data);
    }
  
    const reset = () => {
        setNum1(7);
        setNum2(7);
        setNum3(7); 
    }

    return (
        <div className="gamebox">
            <div className="row g-3">
                <div class="col-sm-3">
                    <input type="text" value={num1} className="counter"  placeholder="0"/>
                </div>
                <div class="col-sm-3">
                    <input type="text" value={num2} className="counter"  placeholder="0"/>
                </div>
                <div class="col-sm-3">
                    <input type="text" value={num3} className="counter"  placeholder="0"/>
                </div>
            </div>
            <div className="game-button">
                <button onClick = {spin} disabled={isPlay == 0 && "disabled" }  className="btn btn-outline-success">Spin</button>
                <button onClick = {reset} className="btn btn-outline-success">Lucky 7</button>
                <button onClick = {gameClosed} className="btn btn-outline-success">Close</button>
            </div>
            
        </div>
    )
}

export default StartPLay    
