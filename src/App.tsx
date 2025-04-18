import { useEffect, useState } from 'react';
import './App.css';
import PasswordInput from "./PasswordInput.tsx";
import PasswordStrength from "./PasswordStrength.tsx";
import CharacterSequenceValidator from "./CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./PasswordTimeValidator.tsx";
import CurrentTemperature from "./CurrentTemperature.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryFlagValidator from "./CountryFlagValidator.tsx";

function App() {
    const [password, setPassword] = useState<string | null>(null);
    const [passwordTime, setPasswordTime] = useState<number | null>(null);

    const handlePasswordChange = (newPassword: string | null) => {
        if (!password && newPassword) {
            setPasswordTime(Date.now());
            console.log("Čas nastaven na:", Date.now());
        }
        setPassword(newPassword);
    };

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {
                if (!prevPassword || prevPassword.length === 0) return prevPassword;

                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    return prevPassword + "😜";
                } else {
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10000);
        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <>
            <h1 className="mb-5 text-dark">Password validator</h1>
            <PasswordInput passwordValue={password} setter={handlePasswordChange} />
            <PasswordStrength password={password} />
            <CharacterSequenceValidator password={password} />
            {passwordTime !== null && <PasswordTimeValidator password={password} time={passwordTime} />}
            <CountryFlagValidator password={password} />
            <CurrentTemperature />
        </>
    );
}

export default App;
