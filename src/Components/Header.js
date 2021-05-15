import React, {useState, useEffect} from 'react'
import Login from './Container/Login'


function Header({balance}) {


    const [show, setShow] = useState(false);
    const [usename, setUsername] = useState('')
    const [mobile, setMobile] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(localStorage.getItem('name') && localStorage.getItem('mobile')){
            setUsername(localStorage.getItem('name'))
            setMobile(localStorage.getItem('mobile'))
        }
    })
    const handleSubmit = (name, mobile) =>{
        if(name && mobile){
            setUsername(name)
            setMobile(mobile)
            localStorage.setItem('name',name)
            localStorage.setItem('mobile',mobile)
            setShow(false)
        }
    }
    
    const logOut = ()=>{
        localStorage.setItem('name','')
        localStorage.setItem('mobile','')
        setUsername('')
        setMobile('')
    }


    return (
        <div>
            <nav className='header'>
                
                <div className="container">
                    <src >Online Casino</src>
                    <div style={{float: "right"}}>
                        <span>Wallet&nbsp;</span><span><strong>${balance}</strong></span>&nbsp;&nbsp;&nbsp;
                        
                        <span  >{usename? usename:"Guest"}</span>&nbsp;
                        <button  onClick={usename ? logOut:handleShow}>{usename ? "Logout":"Login"}</button>
                        <Login show={show}/>
                    </div>    
                     
                </div>
            </nav>
            <Login show={show} handleClose={handleClose} handleSubmit={handleSubmit}/> 
        </div>
    )
}

export default Header
