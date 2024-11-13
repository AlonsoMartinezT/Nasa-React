import { useEffect, useState } from 'react';
import './Astros.css';
import CircularProgress from '@mui/material/CircularProgress';


function AstroCard({ name, craft }) {
    return (
        <div className="astro-card">
            <p className="astro-name">Nombre: {name}</p>
            <p className="astro-craft">Craft: {craft}</p>
        </div>
    );
}

function Astros() {
    const [astros, setAstros] = useState(null);
    const API_URL = 'http://api.open-notify.org/astros.json';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(API_URL);
                const res = await data.json();
                setAstros(res.people); 
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []); 

    return (
        <div className="astros-container">
            {astros === null ? (
                <CircularProgress sx={{ color: "blue" }} />
            ) : (
                astros.map((astro, idx) => (
                    <AstroCard key={idx} {...astro} />
                ))
            )}
        </div>
    );
}

export default Astros;
