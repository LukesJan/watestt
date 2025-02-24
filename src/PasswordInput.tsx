import React from 'react';

interface PasswordStrengthProps {
    password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*]/.test(password);

    let strength = 'Slabé';
    let strengthColor = 'red';

    if (lengthCriteria && uppercaseCriteria && numberCriteria && specialCharCriteria) {
        strength = 'Silné';
        strengthColor = 'green';
    } else if (lengthCriteria && (uppercaseCriteria || numberCriteria || specialCharCriteria)) {
        strength = 'Střední';
        strengthColor = 'yellow';
    }

    return (
        <div>
            <div style={{ backgroundColor: strengthColor, height: '10px', width: '100%', marginBottom: '10px' }} />
            <p>{strength}</p>
            <ul>
                <li style={{ color: lengthCriteria ? 'green' : 'red' }}>
                    Minimálně 8 znaků
                </li>
                <li style={{ color: uppercaseCriteria ? 'green' : 'red' }}>
                    Obsahuje alespoň jedno velké písmeno
                </li>
                <li style={{ color: numberCriteria ? 'green' : 'red' }}>
                    Obsahuje alespoň jedno číslo
                </li>
                <li style={{ color: specialCharCriteria ? 'green' : 'red' }}>
                    Obsahuje alespoň jeden speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;