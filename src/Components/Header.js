import React, {useState, useEffect} from 'react'
import Login from './Container/Login'


function Header({balance}) {


    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('')
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
                    <div className="col-xl-12">
                        <div className="col-md-6" style={{float: "left"}}>
                            <h2 className="company-name">Online Casino</h2>
                        </div>
                        <div className="col-md-6" style={{float:"right",textAlign: "right"}}>
                            <span className="wallet">Wallet{" "} ${""}{balance}</span>
                            {username ? <img width="35px" src="assets\image\no-image-icon-23479.png"></img>:<span className="user-name" >Guest</span>}
                            <a href="#"><span className="login-logout" onClick={username ? logOut:handleShow}>{username ? "Logout":"Login"}</span></a>
                            <Login show={show}/>
                        </div>
                    
                    </div>
                </div>
            </nav>
            <Login show={show} handleClose={handleClose} handleSubmit={handleSubmit}/> 
        </div>
    )
}

export default Header