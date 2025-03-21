
import React, { useState, useEffect } from "react";
import { evaluatePassword } from "./PasswordStrength";

interface PasswordTimeValidatorProps {
    password: string | null;
    time: number;
    validationWindow?: number;
}

const PasswordTimeValidator: React.FC<PasswordTimeValidatorProps> = ({
                                                                         password,
                                                                         time,
                                                                         validationWindow = 5000
                                                                     }) => {
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        if (!password) {
            setIsValid(null);
            return;
        }
        const { errors } = evaluatePassword(password);

        if (errors.length > 0) {
            setIsValid(null);
            return;
        }

        const timeElapsed = Date.now() - time;
        setIsValid(timeElapsed >= validationWindow);
    }, [password, time, validationWindow]);

    return (
        <div>
            {isValid === null ? (
                <p></p>
            ) : (
                <p className={isValid ? "text-success" : "text-danger"}>
                    Časová validace hesla: {isValid ? "Platné" : "Neplatné (zadáno příliš rychle)"}
                </p>
            )}
        </div>
    );
};


export default PasswordTimeValidator
