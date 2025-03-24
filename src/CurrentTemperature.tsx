
import React, {useState ,useEffect} from "react";




const CurrentTemperature: React.FC = () => {
    const [temperature, setTemperature] = useState<string | null>(null);

    useEffect(() => {
        const fetchTemperature = async () => {
            try {
                const response = await fetch('https://wttr.in/Prague?format=%t');
                const data = await response.text();
                setTemperature(data);
            } catch (error) {
                console.error('Chyba při získávání teploty:', error);
            }
        };

        fetchTemperature();
    }, []);

    return (
        <>
            <p className="text-dark">Aktuální teplota v Praze: {temperature}</p>
        </>
    );
};

export default CurrentTemperature;
