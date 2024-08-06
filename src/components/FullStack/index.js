import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { cursos } from './DadosCursosFullStack';

function FullStack() {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardWidth = 320; // Largura do card mais margem (300px + 20px)
  const visibleCards = 4;

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(scrollIndex - 1, 0);
      setScrollIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxIndex = Math.max(0, cursos.length - visibleCards);
      const newIndex = Math.min(scrollIndex + 1, maxIndex);
      setScrollIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [scrollIndex]);

  return (
    <div className="cardCurso">
      <div className="cardHeader">
        <span></span>
        <h1>Full-Stack</h1>
      </div>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="cardBody-wrapper">
          <div className="cardBody" ref={scrollRef}>
            {cursos.map((curso, index) => (
              <a key={index} href={curso.link} className={`carousel-item ${index === scrollIndex + visibleCards - 1 ? 'last-item' : ''}`}>
                <img src={curso.src} alt={`Curso ${index + 1}`} />
              </a>
            ))}
          </div>
        </div>
        <button className="carousel-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default FullStack;
