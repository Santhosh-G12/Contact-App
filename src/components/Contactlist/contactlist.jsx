import { useNavigate } from 'react-router-dom';
import './contactlist.css'
import { useState } from 'react';
const Contactlist = ({receiveContacts,deletefunc})=>{
    console.log(receiveContacts)
    const navigate = useNavigate()
    const home = ()=>{
        navigate('/')
    }
    const toaddcontacts = ()=>{
        navigate('/components/addcontact/addcontact')
    }
    
   
        

    
    
    return(
        
        <div className="contactlist">
            <div className="contacttable">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receiveContacts.map((contact,index)=>(
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.mobile}</td>
                            <td>{contact.mail}</td>
                            <td>
                                <button className = 'deletebutton' onClick={()=>{
                                    console.log(`deleting ${index}`)
                                    deletefunc(index)
                                }}>Delete</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                <div className="addandhome">
                    <button onClick={home}>profile</button>
                    <button onClick={toaddcontacts}>Add newContact</button>
                </div>       
            </div>
        </div>
    )
}
export default Contactlist;