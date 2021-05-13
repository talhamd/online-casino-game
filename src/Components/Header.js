import React, {useState, useEffect} from 'react'

function Header({balance}) {
    return (
        <div>
            <nav className='header'>
                
                <div className="contaainer">
                    <src >Online Casino</src>
                    <div style={{float: "right"}}>
                        <span>Wallet&nbsp;</span><span><strong>${balance}</strong></span>
                        <button class="btn btn-dark ml-auto">Login</button>
                    </div>    

                </div>
            </nav>

        </div>
    )
}

export default Header
