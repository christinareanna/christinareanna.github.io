import React, { useState } from 'react';
import { validatePassword } from './api';

const PasswordPopup = ({ onClose, onValid }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const result = await validatePassword(password);
        if (result.valid) {
            onValid(); // Calls the onValid function to indicate success
        } else {
            setError('Invalid password. Please try again.');
        }
    };

    return (
        <div className="popup">
            <h2>Enter Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default PasswordPopup;