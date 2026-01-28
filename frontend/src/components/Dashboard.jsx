import { useContext, useEffect, useState } from "react";
import Header from "./Header"
import { AuthContext } from "../context/AuthProvider";
import api from "../api/axios";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handeCreateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/users', newUser);
            setUsers(prev => [...prev, res.data.data]);
            setNewUser({ name: '', email: '', password: '', role: 'user' });
        }
        catch (err) {
            alert(err.response?.data?.message || 'Failed to create user')
        }
    }

    const handleDeleteUser = async (id) =>{
        if(!window.confirm("Delete this user")) return;
        
        try{
            await api.delete(`/users/${id}`);
            setUsers(prev=> prev.filter(u=> u._id !== id))
        }
        catch(err){
            alert(err.response?.data?.message);
        }
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get('/users');
                setUsers(res.data.data);
            }
            catch (err) {
                setError("Failed to load users");
            }
            finally {
                setloading(false);
            }
        }
        fetchUsers();
    },
        []);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h2>
                Dashboard
            </h2>
            <ul>

                {users.map((userItem) => (
                    <li key={userItem._id}>
                        {userItem.email} - {userItem.role}
                        {user?.role === 'admin' &&(

                            <button onClick={() =>handleDeleteUser(userItem._id)}>Delete</button>
                        )
                    }
                    </li>
                ))}
            </ul>
            {user.role === 'admin' && (

                <form onSubmit={handeCreateUser}>
                    <input name="name" value={newUser.name} placeholder="Name" onChange={handleChange} />

                    <input name="email" value={newUser.email} placeholder="Email" onChange={handleChange} />

                    <input name="password" value={newUser.password} placeholder="Password" onChange={handleChange} />

                    <select name="role" value={newUser.role} 
                    onChange={handleChange} placeholder='Role'>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit"> Create User</button>

                </form>

            )}
        </div>
    )
}

export default Dashboard;