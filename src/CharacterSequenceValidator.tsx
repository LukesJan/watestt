import React from "react";

interface CharacterSequenceValidatorProps {
    password: string | null
}
const CharacterSequenceValidator: React.FC<CharacterSequenceValidatorProps> = ({password}: CharacterSequenceValidatorProps) => {

    const errorArray: Array<string> = [];
    if (password === null) {return (<p></p>)}
    if (password.search(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])(?=.*[😀-🙏]).{5,}/u) === -1) {
        errorArray.push("Heslo musi obsahovat VELKE, male pismeno, cislici, specialni znak a emoji")
    }

    return (
        <>
            {
                errorArray.map((value, index) => {
                    return <p key={index}>{value}</p>
                })
            }
        </>
    )
};

export default CharacterSequenceValidator;