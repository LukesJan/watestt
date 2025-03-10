import React from 'react';

interface PasswordInputProps {
    passwordValue: string | null,
    setter: React.Dispatch<React.SetStateAction<string | null>>
}


const PasswordInput: React.FC<PasswordInputProps> = ({passwordValue,setter}: PasswordInputProps) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value)
    }

    return (
        <div className="mb-3">
            <input type={'text'} className="form-control" onChange={changeHandler} value={passwordValue ?? ""}/>
        </div>
    )
}

export  default PasswordInput;