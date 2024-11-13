import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';  
import './Apod.css';

function ApodInfo({ url, date, explanation,title }) {  
    return (
        <div className="apod">
            <h1>{title}</h1>
            <img src={url} alt="Astronomy Foto del dia" className="apod-img" />
            <p className="apod-date">Dia: {date}</p>
            <p className='apod-explanation'>Explicacion: {explanation}</p>
        </div>
    );
}

function Apod() {
    const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=aoei1hB0qAQXkntjCLBnaICzO8qCko5gvwhO8163';
    const [apod, setApod] = useState(null);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setApod(data);  
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []); 

    if (apod === null) {
        return <CircularProgress sx={{ color: "red" }} />;
    }

    return (
        <div className="">
            <ApodInfo  title={apod.title} url={apod.url} date={apod.date} explanation={apod.explanation}/> 
        </div>
    );
}

export default Apod;
