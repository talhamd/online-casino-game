import React, {useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'

function Login({show,handleClose,handleSubmit}) {

    const [mobile, setMobile] = useState(null)
    const [name, setName] = useState(null)
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        if(name == "uname"){
            setName(value)
        } else if(name == "number"){
            setMobile(value)
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicPassword">  
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" name="uname" value={name} onChange={(e)=>onChangeHandler(e)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mobile Numer</Form.Label>
                        <Form.Control type="number" placeholder="Enter your mobile number" name="number" value={mobile}  onChange={(e)=>onChangeHandler(e)}/>
                    </Form.Group>
                    {name && mobile ? <Button variant="primary" onClick={()=>handleSubmit(name,mobile)}>Submit</Button>
                    :
                    <Button variant="primary" disabled>Submit</Button>
                    }
                    </Form>    
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>
        </>
  );
}

export default Login
