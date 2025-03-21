
import React from 'react';

interface PasswordInputProps {
    passwordValue: string | null;
    setter: (value: string | null) => void;
}


const PasswordInput: React.FC<PasswordInputProps> = ({passwordValue,setter}: PasswordInputProps) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value)
    }

    return (


        <div className="mb-5">
            <input type={'text'}  className="form-control form-control-lg custom-input " onChange={changeHandler} value={passwordValue ?? ""}/>
        </div>

    )
}

export  default PasswordInput;
