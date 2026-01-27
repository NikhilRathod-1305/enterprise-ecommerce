import { useContext, useEffect, useState } from "react";
import Header from "./Header"
import { AuthContext } from "../context/AuthProvider";
import api from "../api/axios";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);
    
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

            {user?.role === 'admin' && (
                <button>Delete User</button>
            )}
            {/* <ul>

                {users.map((user) => (
                    <li key={user._id}>
                        {user.email} - {user.role}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Dashboard;