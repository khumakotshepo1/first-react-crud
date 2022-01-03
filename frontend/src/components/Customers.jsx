import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Customers = () => {

    const [customers, setCustomers] = useState([])

    let msg;
    let cust;

    if(customers == ""){
       msg = <p className='msg'>You have no customers in records</p>
    }else{
        cust = customers.map((customer, key) => {
            return (<div className='customer' key={key}>
                <h1>{customer.firstName} {customer.lastName}</h1>
                <p>Tel: {customer.cellphone}</p>
                <p>Email: {customer.email}</p>
                <FontAwesomeIcon icon={faTrash} className='del-button' onClick={()=>delCustomer(customer._id)}/>
            </div>)
         })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/read").then(response => setCustomers(response.data))
    }, [])

    const delCustomer = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
    }

    return (
        <div className='customers'>
            <h1>Customers</h1>
            {cust}
            {msg}
        </div>
    )
}

export default Customers
