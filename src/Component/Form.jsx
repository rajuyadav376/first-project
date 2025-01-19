import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 
    const [userData, setUserData] = useState([]);

    const data = () => {
        setUserData([...userData, { name, email, message }]);
        console.log(name, email, message);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className="main">
               <div id='head'>......Form......</div>
                <div className='contact'>
                    <div id='name'>
                    <label htmlFor="NAME">Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /></div>
                    <div id='email'>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div id='message'>
                    <label htmlFor="Message">Message:</label>
                    <input
                        type="text"
                        placeholder="Enter your message"
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </div>
                    <div id='btn'>
                    <button id='btt' onClick={data}>..Submit.. </button>
                    </div>
                </div>
            
            <ul>
                {userData.map((data, index) => (
                    <li key={index}>
                        <h1>{data.name}</h1>
                        <h3>{data.email}</h3>
                        <h4>{data.message}</h4> 
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}

export default Form;
