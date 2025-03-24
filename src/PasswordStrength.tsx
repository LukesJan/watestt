
import {useEffect, useState} from "react";


interface PasswordStrengthProps {
    password: string | null
}

export const evaluatePassword = (password: string | null): { strength: string; errors: string[] } => {
    const errorArray: string[] = [];

   if (!password) {
        return { strength: "Slabé", errors: ["Není nic zadáno, napište něco"] };

    }

    if (password.length < 8) errorArray.push("Heslo je příliš krátké");
    if (!/[A-Z]/.test(password)) errorArray.push("Heslo neobsahuje velké písmeno");
    if (!/[0-9]/.test(password)) errorArray.push("Heslo neobsahuje číslo");
    if (!/[!@#$%^&*]/.test(password)) errorArray.push("Heslo neobsahuje speciální znak");
    if (!/[😀-🙏]/u.test(password)) errorArray.push("Heslo neobsahuje emoji");

    let strength = "Silné";
    if (errorArray.length > 3) strength = "Slabé";
    else if (errorArray.length > 0) strength = "Střední";

    return { strength, errors: errorArray };
};

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [passwordStrength, setPasswordStrength] = useState<string>("");

    useEffect(() => {
        const { strength, errors } = evaluatePassword(password);
        setErrors(errors);
        setPasswordStrength(strength);
    }, [password]);

    useEffect(() => {
        document.title = `Síla hesla: ${passwordStrength}`;
    }, [passwordStrength]);

    return (
        <div >
            {
                errors.map((error, index) => (
                    <p className="text-danger" key={index}>
                        {error}
                    </p>
                )
            )}
            <p className="text-dark">Síla hesla: {passwordStrength}</p>
            {passwordStrength === "Slabé" && (
                <button className="btn btn-danger mt-3" style={{ width: "200px" }}></button>
            )}
            {passwordStrength === "Střední" && (
                <button className="btn btn-warning mt-3" style={{ width: "200px" }}></button>
            )}
            {passwordStrength === "Silné" && (
                <button className="btn btn-success mt-3" style={{ width: "200px" }}></button>
            )}
        </div>
    );
};

export default PasswordStrength;
