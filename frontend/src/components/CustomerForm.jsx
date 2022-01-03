import React, { useState } from 'react'
import axios from 'axios'

const CustomerForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cellphone, setCellphone] = useState("")
    const [email, setEmail] = useState("")

    //Inputs handlers
    const firstNameInput = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameInput = (e) => {
        setLastName(e.target.value)
    }
    const cellphoneInput = (e) => {
        setCellphone(e.target.value)
    }
    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const CustomerFormHandler = () => {
        axios.post("http://localhost:3001/insert",{
            firstName: firstName,
            lastName: lastName,
            cellphone: cellphone,
            email: email
        })
    }

    return (
        <form className='cust-form'>

            <input onChange={firstNameInput} type="text" name="firstName" placeholder="First Name" required/>
            <input onChange={lastNameInput} type="text" name="lastName" placeholder="Last Name" required/>
            <input onChange={cellphoneInput} type="tel" name="cellphone" placeholder="Cellphone" required/>
            <input onChange={emailInput} type="email" name="email" placeholder="Email" required/>
            <button onClick={CustomerFormHandler}>Submit</button>
            
        </form>
    )
}

export default CustomerForm
