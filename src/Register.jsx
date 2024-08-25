import React, { useState, useContext } from 'react';
import ProjectStore from './context/store';
import { Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({ email: '', password: '', age: '' });
    const [_, dispatch] = useContext(ProjectStore);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUser = _.cart_users.find(u => u.email === user.email);

        if (existingUser) {
            setError('Email already in use. Please choose a different email.');
            return;
        }

        dispatch({ type: 'REGISTER', user });
        setUser({ email: '', password: '', age: '' });
        setError(''); // Clear any previous error message
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-[30px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="age">Age</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        id="age"
                        value={user.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Register
                </button>
            </form>
            <Link 
                className="p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 flex mt-[20px] items-center justify-center"
                to='/'
            >
                Back to Home
            </Link>
        </div>
    );
};

export default Register;