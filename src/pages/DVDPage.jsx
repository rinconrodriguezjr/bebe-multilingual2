import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const videoLinks = [
  // Reemplaza con tus enlaces de YouTube
  'https://www.youtube.com/embed/W46-VHmrIas',
  'https://www.youtube.com/embed/pcEMHNh2nkg',
  'https://www.youtube.com/embed/84rRYStTO7M',
  'https://www.youtube.com/embed/ER7e4QqZIO8',
  'https://www.youtube.com/embed/kCFKudIeCdw',
  'https://www.youtube.com/embed/YyOMDTKgNG4',
  'https://www.youtube.com/embed/TgVd59-xvHA',
  'https://www.youtube.com/embed/MyHabN3Qdho', 
  'https://www.youtube.com/embed/rwyPuZ-TQLY', 
  'https://www.youtube.com/embed/0Ef0kxyY0L8', 
  'https://www.youtube.com/embed/oIouxt_dWVM', 
  'https://www.youtube.com/embed/k9Ly0OXk2PE', 
  'https://www.youtube.com/embed/65Y56ulWOCA', 
  'https://www.youtube.com/embed/cgsnsQnFfRQ', 
  'https://www.youtube.com/embed/EDCDlv-I2as', 
  
  // 2
  
  'https://www.youtube.com/embed/k_85Tc26e8Y', 
  'https://www.youtube.com/embed/0wBFJYXhWJg', 
  'https://www.youtube.com/embed/6DczT4rZ-08', 
  'https://www.youtube.com/embed/hYNzRBAIJAg', 
  'https://www.youtube.com/embed/fDAmI_o_7u8', 
  'https://www.youtube.com/embed/dbqvLmY7LCg', 
  'https://www.youtube.com/embed/FQ2oUxhidvk', 
  'https://www.youtube.com/embed/qQUhS4UHRIU', 
  'https://www.youtube.com/embed/t6TDKrBFZM0', 
  'https://www.youtube.com/embed/HfONfKsuEqo', 
  'https://www.youtube.com/embed/JzYcNrkvzdc', 
  'https://www.youtube.com/embed/EJZ4yxgazjM', 
  'https://www.youtube.com/embed/P1mly5Ift_g', 
  'https://www.youtube.com/embed/EVgaPQzHIqI', 
  'https://www.youtube.com/embed/XH3Wh94HnjE',   
  
  // 3
  'https://www.youtube.com/embed/W46-VHmrIas',
  'https://www.youtube.com/embed/pcEMHNh2nkg',
  'https://www.youtube.com/embed/84rRYStTO7M',
  'https://www.youtube.com/embed/ER7e4QqZIO8',
  'https://www.youtube.com/embed/kCFKudIeCdw',
  'https://www.youtube.com/embed/YyOMDTKgNG4',
  'https://www.youtube.com/embed/TgVd59-xvHA',
  'https://www.youtube.com/embed/MyHabN3Qdho', 
  'https://www.youtube.com/embed/rwyPuZ-TQLY', 
  'https://www.youtube.com/embed/0Ef0kxyY0L8', 
  'https://www.youtube.com/embed/oIouxt_dWVM', 
  'https://www.youtube.com/embed/k9Ly0OXk2PE', 
  'https://www.youtube.com/embed/65Y56ulWOCA', 
  'https://www.youtube.com/embed/cgsnsQnFfRQ', 
  'https://www.youtube.com/embed/EDCDlv-I2as', 
  // 4
  'https://www.youtube.com/embed/W46-VHmrIas',
  'https://www.youtube.com/embed/pcEMHNh2nkg',
  'https://www.youtube.com/embed/84rRYStTO7M',
  'https://www.youtube.com/embed/ER7e4QqZIO8',
  'https://www.youtube.com/embed/kCFKudIeCdw',
  'https://www.youtube.com/embed/YyOMDTKgNG4',
  'https://www.youtube.com/embed/TgVd59-xvHA',
  'https://www.youtube.com/embed/MyHabN3Qdho', 
  'https://www.youtube.com/embed/rwyPuZ-TQLY', 
  'https://www.youtube.com/embed/0Ef0kxyY0L8', 
  'https://www.youtube.com/embed/oIouxt_dWVM', 
  'https://www.youtube.com/embed/k9Ly0OXk2PE', 
  'https://www.youtube.com/embed/65Y56ulWOCA', 
  'https://www.youtube.com/embed/cgsnsQnFfRQ', 
  'https://www.youtube.com/embed/EDCDlv-I2as', 
  // 5
  'https://www.youtube.com/embed/W46-VHmrIas',
  'https://www.youtube.com/embed/pcEMHNh2nkg',
  'https://www.youtube.com/embed/84rRYStTO7M',
  'https://www.youtube.com/embed/ER7e4QqZIO8',
  'https://www.youtube.com/embed/kCFKudIeCdw',
  'https://www.youtube.com/embed/YyOMDTKgNG4',
  'https://www.youtube.com/embed/TgVd59-xvHA',
  'https://www.youtube.com/embed/MyHabN3Qdho', 
  'https://www.youtube.com/embed/rwyPuZ-TQLY', 
  'https://www.youtube.com/embed/0Ef0kxyY0L8', 
  'https://www.youtube.com/embed/oIouxt_dWVM', 
  'https://www.youtube.com/embed/k9Ly0OXk2PE', 
  'https://www.youtube.com/embed/65Y56ulWOCA', 
  'https://www.youtube.com/embed/cgsnsQnFfRQ', 
  'https://www.youtube.com/embed/EDCDlv-I2as', 
  // 6
  'https://www.youtube.com/embed/W46-VHmrIas',
  'https://www.youtube.com/embed/pcEMHNh2nkg',
  'https://www.youtube.com/embed/84rRYStTO7M',
  'https://www.youtube.com/embed/ER7e4QqZIO8',
  'https://www.youtube.com/embed/kCFKudIeCdw',
  'https://www.youtube.com/embed/YyOMDTKgNG4',
  'https://www.youtube.com/embed/TgVd59-xvHA',
  'https://www.youtube.com/embed/MyHabN3Qdho', 
  'https://www.youtube.com/embed/rwyPuZ-TQLY', 
  'https://www.youtube.com/embed/0Ef0kxyY0L8', 
  'https://www.youtube.com/embed/oIouxt_dWVM', 
  'https://www.youtube.com/embed/k9Ly0OXk2PE', 
  'https://www.youtube.com/embed/65Y56ulWOCA', 
  'https://www.youtube.com/embed/cgsnsQnFfRQ', 
  'https://www.youtube.com/embed/EDCDlv-I2as', 
  // 7
  'https://www.youtube.com/embed/ZfF8rBIzrv8',   
  'https://www.youtube.com/embed/7tk-ldBHCAQ',   
  'https://www.youtube.com/embed/PeT8fgTpYM4',   
  'https://www.youtube.com/embed/ECW0ZesxyQk',   
  'https://www.youtube.com/embed/yuM83p0s7Fw',   
  'https://www.youtube.com/embed/-w1vCg95XCw',   
  'https://www.youtube.com/embed/_JcXPAH8DAw',   
  'https://www.youtube.com/embed/V9e2kqTSd1U',   
  'https://www.youtube.com/embed/zpdMro6Tug8',   
  'https://www.youtube.com/embed/HvNleNENCV8',   
  'https://www.youtube.com/embed/-HARL53CgEE',   
  'https://www.youtube.com/embed/2Uv4ffedo2Q',   
  'https://www.youtube.com/embed/RonIDfl58zU',    
  'https://www.youtube.com/embed/pJtwLKJ7xPA',    
  'https://www.youtube.com/embed/FlGCiboFMYg',    
  // 8
  // 9
  // 10

];

const dvdTitles = [
  'DVD 1 Español - Inglés',
  'DVD 2 Inglés - Español',
  'DVD 3 Italiano - Alemán',
  'DVD 4 Alemán - Italiano',
  'DVD 5 Francés - Portugués',
  'DVD 6 Portugués - Francés',
  'DVD 7 Mandarín - Todos',
  'DVD 8 Mandarín - Todos',
  'DVD 9 Palabras - Todos',
  'DVD 10 Palabras - Todos',
];

function DVDPage() {
  const { dvdId } = useParams();
  const dvdIndex = parseInt(dvdId, 10) - 1;
  const startIndex = dvdIndex * 15;
  const endIndex = startIndex + 15;
  const currentVideos = videoLinks.slice(startIndex, endIndex);

  const [seenVideos, setSeenVideos] = useState(Array(currentVideos.length).fill(false));

  const toggleCheckbox = (index) => {
    const updatedVideos = [...seenVideos];
    updatedVideos[index] = !updatedVideos[index];
    setSeenVideos(updatedVideos);
  };

  const toggleAll = () => {
    const isAllSeen = seenVideos.every((seen) => seen);
    setSeenVideos(Array(currentVideos.length).fill(!isAllSeen));
  };

  return (
    <div className="dvd-page">
      <Link to="/" className="back-link">Volver a la lista de DVDs</Link>
      <h1>{dvdTitles[dvdIndex]}</h1>
      <div className="global-checkbox">
        <input type="checkbox" onChange={toggleAll} checked={seenVideos.every((seen) => seen)} />
        <label>Marcar/Desmarcar todos los videos</label>
      </div>
      <div className="video-grid">
        {currentVideos.map((link, index) => (
          <div key={index} className="video-item">
            <iframe
              src={link}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video"
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={seenVideos[index]}
                onChange={() => toggleCheckbox(index)}
              />
              <label>Visto</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DVDPage;
