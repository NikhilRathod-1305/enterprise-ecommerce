import { useContext, useState } from "react";
import api from '../api/axios'
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login(){
   const { login } = useContext(AuthContext);
   const navigate = useNavigate(); 
   const [form , setForm] = useState({
    email: '',
    password: ''
   })

 
   const handleChange = (e) => {
    setForm({
        ...form ,
        [e.target.name]: e.target.value
    })
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await api.post(
            '/login',
            form
        );
        login(response?.data?.token);
        console.log(response);
        
        navigate('/dashboard');
    }
    catch(err){
        console.log('login failed',err);
        
    }
   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder='Enter Email'
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder='Enter Password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;