import React, { useEffect ,useState} from 'react'
import axios from "axios";


const Admin = () => {

const[profiles,setProfiles]=useState([]);

useEffect(()=>{
    const fetchusers = async ()=>{
        try{
            const response = await axios.get("users");
            const fetchedUsers= response.data;
            setProfiles(fetchedUsers);
        }
        catch(error){
            console.error("Error fetching users",error)
        }
    };
    fetchusers();
},[]);
 return(
    <>
   <div className="userProfiles">
    <ol>
        {profiles.map((user)=>(
            <ol>
                <li key={Object.id}>
                    <p>{user.name}</p>
                    <p>{user.}</p>
                </li>
            </ol>
        ))}
    </ol>
    </div>
    </>
 )
};



export default Admin