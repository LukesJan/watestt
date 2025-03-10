import React, { useState, useEffect } from "react";

interface PasswordTimeValidatorProps {
    password: string | null;
    time: number;
    validationWindow?: number;
    debounceTime?: number;
}

const PasswordTimeValidator: React.FC<PasswordTimeValidatorProps> = ({
                                                                         password,
                                                                         time,
                                                                         validationWindow = 5000,
                                                                         debounceTime = 3000 // 1
                                                                     }) => {
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [finalPassword, setFinalPassword] = useState<string | null>(null);

    useEffect(() => {
        if (!password) {
            setFinalPassword(null);
            setIsValid(null);
            return;
        }

        const handler = setTimeout(() => {
            setFinalPassword(password);
        }, debounceTime);

        return () => clearTimeout(handler);
    }, [password, debounceTime]);

    useEffect(() => {
        if (!finalPassword) {
            setIsValid(null);
            return;
        }

        const timeElapsed = Date.now() - time;
        setIsValid(timeElapsed > validationWindow);
    }, [finalPassword, time, validationWindow]);

    return (
        <div>
            {isValid === null ? (
                <p></p>
            ) : (
                <p>Časová validace hesla: {isValid ? "Platné" : "Neplatné (zadáno příliš rychle)"}</p>
            )}
        </div>
    );
};

export default PasswordTimeValidator;