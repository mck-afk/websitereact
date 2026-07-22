import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import THEABODE from '../data/abode.js';
import './Abode.css';

const AbodeRoom = () => {
  const { roomId } = useParams();
  const id = Number(roomId);
  const room = useMemo(() => THEABODE.find(item => item.id === id), [id]);
  const [view, setView] = useState(() => {
    if (typeof window === 'undefined') return 'honeycomb';
    return window.localStorage.getItem('abode:view') || 'honeycomb';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('abode:view', view);
    }
  }, [view]);

  if (!room) {
    return (
      <div className="abode-page">
        <h1>Room not found</h1>
        <p>The requested Abode room could not be found.</p>
        <Link to="/abode" className="abode-button">Return to Abode</Link>
      </div>
    );
  }

  const currentIndex = THEABODE.findIndex(item => item.id === id);
  const previousRoom = THEABODE[(currentIndex - 1 + THEABODE.length) % THEABODE.length];
  const nextRoom = THEABODE[(currentIndex + 1) % THEABODE.length];
  const homeRoom = THEABODE.find(item => item.id === 0);
  const previousRoomColor = previousRoom?.dimensions?.backgroundColor || '#ffffff';
  const nextRoomColor = nextRoom?.dimensions?.backgroundColor || '#ffffff';
  const homeRoomColor = homeRoom?.dimensions?.backgroundColor || '#ffffff';

  const toggleAbodeView = () => {
    setView(prev => (prev === 'honeycomb' ? 'blueprint' : 'honeycomb'));
  };

  const toggleImage = view === 'honeycomb'
    ? '/abode/Assets/floorplan.png'
    : '/abode/Assets/blueprint.svg';

  return (
    <div className={`abode-room-page ${room.colour}`}>
      <div className={`room-edge-navigation ${view === 'blueprint' ? 'is-hidden' : ''}`} aria-label="Room navigation">
        <Link
          to={previousRoom.link}
          className="room-edge-nav room-edge-nav--prev"
          style={{ backgroundColor: `${previousRoomColor}dd` }}
        >
          <span className="room-edge-nav__label">Previous</span>
          <span className="room-edge-nav__title">{previousRoom.title}</span>
        </Link>
        <Link
          to={nextRoom.link}
          className="room-edge-nav room-edge-nav--next"
          style={{ backgroundColor: `${nextRoomColor}dd` }}
        >
          <span className="room-edge-nav__label">Next</span>
          <span className="room-edge-nav__title">{nextRoom.title}</span>
        </Link>
        <Link
          to="/abode"
          className="room-edge-nav room-edge-nav--bottom"
          style={{ backgroundColor: `${homeRoomColor}dd` }}
        >
          <span className="room-edge-nav__label">Return</span>
          <span className="room-edge-nav__title">0. The Antechamber</span>
        </Link>
      </div>

      <section className={`room-hero ${room.colour}light`}>
        <div className="hero-top">
          <img
            src={toggleImage}
            alt={view === 'honeycomb' ? 'Switch to blueprint view' : 'Switch to honeycomb view'}
            className="abode-small-toggle"
            onClick={toggleAbodeView}
          />
          
        </div>

        <h3>{room.title}</h3>
        <h4>{room.room.subtitle}</h4>

        <div className="dimensions">
          <div>
            <h4>Numerology</h4>
            <p>{room.id}</p>
          </div>
          <div>
            <h4>Astrology Axis</h4>
            <p>{room.zodiac}</p>
          </div>
          <div>
            <h4>Major Arcana</h4>
            <p>{room.id === 0 ? '0. The Fool' : room.id === 1 ? '1. The Magician' : room.id === 2 ? '2. The High Priestess' : room.id === 3 ? '3. The Empress' : room.id === 4 ? '4. The Emperor' : room.id === 5 ? '5. The Hierophant' : '6. The Lovers'}</p>
          </div>
          <div>
            <h4>Chakra</h4>
            <p>{room.chakra}</p>
          </div>
        </div>

        <p className="room-description">{room.description}</p>
      </section>

      <section className="room-content">
        {room.content.map((block, index) => {
          switch (block.type) {
            case 'text':
              return <p key={index}>{block.value}</p>;
            case 'image':
              return <img key={index} className="abode-image" src={block.src} alt={block.alt} />;
            case 'link':
              return (
                <p key={index}>
                  <a href={block.href} target="_blank" rel="noreferrer">{block.label}</a>
                </p>
              );
            case 'list':
              return (
                <ul key={index}>
                  {block.value.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </ul>
              );
            default:
              return null;
          }
        })}
      </section>
    </div>
  );
};

export default AbodeRoom;
