import { useEffect, useState } from 'react';
import './addcontact.css'
import { Navigate, useNavigate } from 'react-router-dom';
const AddContact = ({sendNewContact})=>{
    const[personDetails,setpersonDetails] = useState({name:'',mobile:'' ,mail:''});
    const[allcontacts,setallContacts] = useState(()=>{
        const savedContacts = localStorage.getItem('contacts')
        return savedContacts? JSON.parse(savedContacts) :[];
    })

    const navigate = useNavigate();

    
   

    const handleChange =(e)=>{
        const{name,value} = e.target
        console.log(name)
        setpersonDetails(prevDetails=>({...prevDetails,[name]:value}))
        
   }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newContact = {
            name : personDetails.name,
            mobile: personDetails.mobile,
            mail : personDetails.mail,
        }
        const updatedContacts = [...allcontacts,newContact]
        localStorage.setItem('contacts',JSON.stringify(updatedContacts))
        sendNewContact(updatedContacts)
        setallContacts(updatedContacts)
        setpersonDetails({name:'',mobile:'',mail:''})
        navigate('/components/Contactlist/contactlist')  
    }
   
    return(
        <div className="rApp">
            <div className="formbox">
                <h2>Contact Details</h2>
                <hr></hr>
                <form onSubmit={handleSubmit} >
                    <input className="Name" onChange= {handleChange} name ='name' value={personDetails.name} placeholder="Enter Name"  required></input>
                    <input className="MobileNo" onChange= {handleChange} name ='mobile'  value ={personDetails.mobile} placeholder="Enter Mobile No" type='text' required ></input>
                    <input className="Mailid" onChange= {handleChange} name ='mail'  value = {personDetails.mail} placeholder="Mail id" type='text' required ></input>
                    <button className='save' type='submit' >Save</button>
                </form>
                
            </div>
            
        </div>
    )
}
export default AddContact;