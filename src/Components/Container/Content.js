import React, {useState} from 'react'
import StartPlay from './StartPlay'

function Content({updateBlance}) {
  const [isGameStart, setIsGameStart] = useState(false)

  const startGame = () => {
    setIsGameStart(true);
  }

  const gameClosed = () => {
    setIsGameStart(false);
  }
    return (
        <div className="container tbody">
          <table class="table table-shadow table-dark table-sm table-hover table-striped ">
            <thead className="tbody">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Slot</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          </table>
          <div>
            <div className="container">
                  <button onClick = {startGame} className="btn btn-secondary ">Start playing</button>
            </div>
            <br></br>
           { isGameStart && <StartPlay  gameClosed = {gameClosed} updateBlance={updateBlance}/> }
          </div>
                   
          
        </div>

    )
}

export default Content
