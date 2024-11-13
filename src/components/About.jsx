import React from 'react';
import './About.css';
function About() {
  return (
    <div className="about-container">
      <section className="personal-info">
        <h1>Sobre Carlos Fontanot</h1>
        <div className="photo-container">
          <img 
            src="https://ciencia.nasa.gov/wp-content/uploads/sites/2/2023/06/Retrato_Carlos_Fontanot.png?w=1024" 
            alt="Carlos Fontanot"
            className="personal-photo" 
          />
        </div>
        <h2>Nombre: Carlos Fontanot</h2>
        <p><strong>Correo:</strong> carlos.fontanot@example.com</p>
        <p><strong>Descripción:</strong> Carlos Fontanot, mexicano de origen, es el encargado de gestionar todas las imágenes y videos de la Estación Espacial Internacional (EEI) de la NASA, supervisando su adquisición, procesamiento y distribución. A lo largo de 18 años, la EEI ha transmitido en vivo seis canales en HD y descargado millones de imágenes de la Tierra y de las actividades en el espacio.<br/>
        Con 39 años de experiencia en la industria de la imagen, Carlos lleva 25 años trabajando en la NASA, donde fue Oficial de Asuntos Públicos en Moscú, coordinando transmisiones en vivo desde Rusia y Kazajistán. Habla alemán, español e inglés.
        Recientemente, fue recibido por el Director General de la Agencia Espacial Mexicana (AEM), Dr. Javier Mendieta, para celebrar el primer aniversario de "Espacio a Tierra", una cápsula  educativa en español creada en colaboración entre la NASA y la AEM..</p>
      </section>
      <section className="nasa-info">
        <h2>Sobre la NASA</h2>
        <p>La NASA (Administración Nacional de Aeronáutica y del Espacio) es una agencia del gobierno de los Estados Unidos dedicada a la exploración espacial, la investigación aeronáutica y la tecnología. Fundada el 29 de julio de 1958, la NASA ha logrado hitos históricos, como la llegada del hombre a la Luna, el envío de rovers a Marte y el estudio de planetas más allá de nuestro sistema solar.</p>
        <p>La NASA también lidera investigaciones sobre el cambio climático, la atmósfera terrestre y la biología espacial. Sus misiones científicas continúan expandiendo los límites del conocimiento humano y contribuyen significativamente al avance de la ciencia, la tecnología y la innovación global.</p>
        <p>Visita su página oficial para más información: <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a></p>
      </section>
    </div>
  );
}

export default About;
