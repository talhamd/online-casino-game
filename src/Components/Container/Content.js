import React, {useState} from 'react'
import StartPlay from './StartPlay'

function Content({updateBlance}) {
  const [isGameStart, setIsGameStart] = useState(false)
  const [gameResults, setGameResults] = useState([])

  const startGame = () => {
    setIsGameStart(true);
  }

  const gameClosed = () => {
    setIsGameStart(false);
  }

  const saveGameResults = (data) => {
    let data1 = [...gameResults]
    data1.push(data);
    setGameResults(data1)
  }
  
  return (
      <div className="container tbody">
        <table class="table table-shadow table-sm table-hover table-striped ">
          <thead className="tbody">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Slot</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
        <tbody>
          {gameResults && gameResults.map((data,i) =>{
            
            return(
              <React.Fragment>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.sloats}</td>
                  <td>{data.time}</td>
                </tr>
              </React.Fragment>
            )
          })}
        
        </tbody>
        </table>
        <div>
          <div className="container">
                <button onClick = {startGame} className="btn btn-secondary ">Start playing</button>
          </div>
          <br></br>
          { isGameStart && <StartPlay  gameClosed = {gameClosed} updateBlance={updateBlance} saveGameResults={saveGameResults}/> }
        </div>
                
      </div>
  )
}

export default Content
