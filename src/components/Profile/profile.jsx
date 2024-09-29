import './profile.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Profile = ()=>{
    const navigate = useNavigate();

    const show = ()=>{
        navigate('/components/Contactlist/contactlist')
    }

    const addContact=()=>{
        navigate('/components/addcontact/addcontact')
    }
    return(
        <div className="App">
            <div className="header">
                    <h2>Contacts</h2>
                </div>
            <div className="container">
                
                <div className="profilebox">
                    <h1>Santhosh</h1>
                    <p className='details'>Mobile: 7010630284</p>
                    <p className='details'>Mail : g.santhosh7890@gmail.com</p>
                </div>
                <div className="add">
                    <button className ='addcontact' onClick={addContact}>Add Contacts</button>
                    <button className ='showcontact'onClick={show} >Show Contacts</button>
                </div>
            </div>
        </div>
       
        
    )
}
export default Profile;