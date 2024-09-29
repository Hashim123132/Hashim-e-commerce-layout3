import { useState } from "react";


const Contact = ()=>{
  
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')

  const formData = {
    first_name : fname ,
    last_name : lname ,
    email : email,
    password : password,
    phone: phone

  }

  const SubmitForm = () =>{
    console.log('Form Data',formData)
        
  }

  return(
    <>
    <title>SHOP.CO</title>
    <div className="max-[700px]  rounded-2xl p-6 border border-solid mt-80 mx-96 border-gray-300">
    <h2 className="text-3xl font-integral font-bold">Contact US</h2>
      
      <input className="w-[100%] h-10 border-solid border-gray-300 border mb-4 mt-2 rounded-lg pl-2 " type="text"  placeholder = "First Name" value={fname} onChange={(e) => setFname(e.target.value)}  />
      <input className="w-[100%] h-10 border-solid border-gray-300 border mb-4 rounded-lg pl-2 " type="text"  placeholder = "Last Name"       value={lname}  onChange={(e) => setLname(e.target.value)} />
      <input className="w-[100%] h-10 border-solid border-gray-300 border mb-4 rounded-lg pl-2 " type="email" placeholder = "email"           value={email}  onChange={(e) => setEmail(e.target.value)} />
      <input className="w-[100%] h-10 border-solid border-gray-300 border mb-4 rounded-lg pl-2 " type="password" placeholder = "password"     value={password}  onChange={(e) => setPassword(e.target.value)}  />
      <input className="w-[100%] h-10 border-solid border-gray-300 border mb-4 rounded-lg pl-2 " type="number" placeholder = "Phone Number"   value={phone}  onChange={(e) => setPhone(e.target.value)}   />
        <button className="m-3 p-3 font-integral font-bold bg-black text-white rounded-xl transition-opacity duration-300 opacity-100 hover:opacity-80
        active:opacity-60" onClick={SubmitForm} >Submit</button>
  </div>    
    
    
    
    
    </>
  ); 
}
export default Contact
