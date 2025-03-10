import React from 'react';

interface PasswordStrengthProps {
    password: string | null
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) => {

    const errorArray: Array<string> = [];

    if (password === null) {return(<p className="text-danger">Napis neco</p>);}

    if (password.length < 8) {
        errorArray.push('Heslo je prilis kratke')
    }
    if (password.search("[A-Z]") === -1) {errorArray.push('Heslo neobsauje alespon 1 velke pismeno')}
    if (password.search("[0-9]") === -1) {errorArray.push('Heslo neobsahuje alespon 1 cislici')}
    if (password.search("[!@#$%^&*]") === -1) {errorArray.push('Heslo neobsahuje alespon 1 specialni znak')}
    if (password.search(/[😀-🙏]/u) === -1) {errorArray.push('Heslo neobsahuje emoji')}

    return (
        <div className="alert alert-warning mt-2">
            {errorArray.length === 0 ? (
                <p className="text-success">Heslo je dostatečně silné</p>
            ) : (
                errorArray.map((value, index) => (
                    <p key={index} className="text-danger">{value}</p>
                ))
            )}
        </div>

    )
}

export default PasswordStrength;