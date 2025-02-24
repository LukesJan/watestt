import React, { useState } from 'react';


interface PasswordProps {
    setPassword: (password: string) => void;
}
const PasswordInput: React.FC<PasswordProps> = ({ setPassword }) => {
    const [password, setLocalPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setLocalPassword(newPassword);
        setPassword(newPassword);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePassword}
                placeholder="Zadejte heslo"
            />
            <button onClick={togglePasswordVisibility}>
                {showPassword ? 'Skryt' : 'Zobrazit'}
            </button>
        </div>
    );
};

export default PasswordInput;