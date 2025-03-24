import React, { useState } from 'react';
import { calcAge } from './utils';

export default function AgeCalculator() {
    const [birthYear, setBirthYear] = useState<string>('');
    const [age, setAge] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const year = parseInt(value, 10);

        setBirthYear(value);
        setAge(!isNaN(year) ? calcAge(year) : null);
    };

    return (
        <div>
            <label>
                Zadej rok narození:
                <input type="number" value={birthYear} onChange={handleChange} />
            </label>
            {age !== null && <p>Váš věk je: {age}</p>}
        </div>
    );
}
