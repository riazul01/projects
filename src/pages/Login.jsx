import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({email: '', password: ''});

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="p-[0.8rem] bg-[#222] rounded-lg">
                <h1 className="text-[1.8rem] font-[600]">Login</h1>
                <div className="h-[0.4rem] w-[4rem] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></div>
                <form onSubmit={handleSubmit} className="mt-[1rem] flex flex-col">
                    <input value={user.email} onChange={handleChange} className="mb-[1rem] ps-[0.8rem] py-[0.6rem] text-[1.1rem] w-[300px] bg-[#333] border-none outline-none rounded-lg" type="text" name="email" placeholder="Enter your email"/>
                    <input value={user.password} onChange={handleChange} className="mb-[1.2rem] ps-[0.8rem] py-[0.6rem] text-[1.1rem] w-[300px] bg-[#333] border-none outline-none rounded-lg" type="password" name="password" placeholder="Enter your password"/>
                    <button className="py-[0.6rem] text-[1.1rem] font-[500] bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 rounded-lg" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;