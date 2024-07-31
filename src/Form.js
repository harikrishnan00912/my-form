import React, { useState } from 'react'
import './index.css';


// Parent component 

const Form = ({addData}) => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [alertPopUp, setAlertPopUp] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setAlertPopUp(true)
        // console.log('username :', username)
        // console.log('username :', password)
        setUserName('')
        setPassword('')

        addData({username,password})

        setTimeout(() => {
            setAlertPopUp(false)
            setLoading(false)
        }, 2000)

        console.log("Submitted Data:", { username, password })
    }

    return (
        <>
            <div>
                {alertPopUp ? (
                    'Form is Submitted Successfully'
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h1>Email Registration</h1>
                        <div className='form-details'>
                            <label className='label-styling' htmlFor='username'>Username</label>
                            <input value={username} onChange={(e) => setUserName(e.target.value)} id='username' type='text' placeholder='Enter Username' />
                        </div>
                        <div className='form-details'>
                            <label className='label-styling' htmlFor='passwrod'>Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' type='password' placeholder='Enter Password' />
                        </div>
                        <button type='submit' className='button-styling'>
                            {loading ? 'Thanks for Submitting' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </>
    )
}

export default Form
