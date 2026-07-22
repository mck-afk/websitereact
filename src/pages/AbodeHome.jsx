import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import THEABODE from '../data/abode.js';
import './Abode.css';

const roomOrder = [6, 5, 1, 0, 4, 2, 3];

const AbodeHome = () => {
  const [view, setView] = useState(() => {
    if (typeof window === 'undefined') return 'honeycomb';
    return window.localStorage.getItem('abode:view') || 'honeycomb';
  });
  const [hoveredRoomId, setHoveredRoomId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('abode:view', view);
    }
  }, [view]);

  const orderedRooms = useMemo(() => {
    const rooms = roomOrder.map(id => THEABODE.find(room => room.id === id));
    if (rooms.some(room => !room)) {
      console.error('AbodeHome: missing rooms for ids', roomOrder.filter((id, index) => !rooms[index]));
    }
    return rooms.filter(Boolean);
  }, []);

  const toggleAbodeView = () => {
    setView(prev => (prev === 'honeycomb' ? 'blueprint' : 'honeycomb'));
  };

  const handleRoomClick = (event, roomLink) => {
    if (event.metaKey || event.ctrlKey) {
      event.preventDefault();
      window.open(roomLink, '_blank');
    }
  };

  const toggleImage = view === 'honeycomb'
    ? '/abode/Assets/floorplan.png'
    : '/abode/Assets/blueprint.svg';

  return (
    <div className="abode-page">
      <section className="abode-home-header">
        <h1>Anna’s Abode</h1>
        <p>best experienced on a desktop</p>
        <p className="abode-intro">
          <br />
        </p>
        
        <div className="abode-header-controls">
          <img
            className="abode-toggle-image"
            src={toggleImage}
            alt={view === 'honeycomb' ? 'Switch to blueprint view' : 'Switch to honeycomb view'}
            onClick={toggleAbodeView}
          />
          
        </div>
      </section>

      <div id="abode" className={`abode-view abode-view--${view}`}>
        {view === 'honeycomb' ? (
          <div className="honeycomb">
            <div className="honeycomb-row honeycomb-row--top">
              {orderedRooms.slice(0, 2).map(room => {
                if (!room) return null;
                const hovered = hoveredRoomId === room.id;
                const dims = room.dimensions || {};
                return (
                  <Link
                    key={room.id}
                    to={room.link}
                    className="hexagon"
                    style={{
                      backgroundColor: dims.backgroundColor || '#fff',
                      backgroundImage: hovered ? dims.backgroundImage || 'none' : 'none',
                      backgroundSize: dims.backgroundSize || 'cover',
                      backgroundPosition: dims.backgroundPosition || 'center'
                    }}
                    onClick={event => handleRoomClick(event, room.link)}
                    onMouseEnter={() => setHoveredRoomId(room.id)}
                    onMouseLeave={() => setHoveredRoomId(null)}
                  >
                    <span>{room.title}</span>
                  </Link>
                );
              })}
            </div>
            <div className="honeycomb-row honeycomb-row--middle">
              {orderedRooms.slice(2, 5).map(room => {
                if (!room) return null;
                const hovered = hoveredRoomId === room.id;
                const dims = room.dimensions || {};
                return (
                  <Link
                    key={room.id}
                    to={room.link}
                    className="hexagon"
                    style={{
                      backgroundColor: dims.backgroundColor || '#fff',
                      backgroundImage: hovered ? dims.backgroundImage || 'none' : 'none',
                      backgroundSize: dims.backgroundSize || 'cover',
                      backgroundPosition: dims.backgroundPosition || 'center'
                    }}
                    onClick={event => handleRoomClick(event, room.link)}
                    onMouseEnter={() => setHoveredRoomId(room.id)}
                    onMouseLeave={() => setHoveredRoomId(null)}
                  >
                    <span>{room.title}</span>
                  </Link>
                );
              })}
            </div>
            <div className="honeycomb-row honeycomb-row--bottom">
              {orderedRooms.slice(5).map(room => {
                if (!room) return null;
                const hovered = hoveredRoomId === room.id;
                const dims = room.dimensions || {};
                return (
                  <Link
                    key={room.id}
                    to={room.link}
                    className="hexagon"
                    style={{
                      backgroundColor: dims.backgroundColor || '#fff',
                      backgroundImage: hovered ? dims.backgroundImage || 'none' : 'none',
                      backgroundSize: dims.backgroundSize || 'cover',
                      backgroundPosition: dims.backgroundPosition || 'center'
                    }}
                    onClick={event => handleRoomClick(event, room.link)}
                    onMouseEnter={() => setHoveredRoomId(room.id)}
                    onMouseLeave={() => setHoveredRoomId(null)}
                  >
                    <span>{room.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <table className="abode-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Room</th>
                <th>Function</th>
                <th>Realm</th>
                <th>Resource</th>
                <th>Relation</th>
                <th>Day</th>
                <th>Zodiac</th>
                <th>Chakra</th>
                <th>Artists Way</th>
              </tr>
            </thead>
            <tbody>
              {THEABODE.map(room => (
                <tr key={room.id} className={`abode-row ${room.colour}`}>
                  <td>{room.id}</td>
                  <td>
                    <Link to={room.link} className="abode-room-link">
                      <strong>{room.room.name}</strong>
                      <div className="abode-subtitle">{room.room.subtitle}</div>
                    </Link>
                  </td>
                  <td>{room.func}</td>
                  <td>{room.realm}</td>
                  <td>{Array.isArray(room.resource) ? room.resource.join(', ') : room.resource}</td>
                  <td>{room.relation}</td>
                  <td>{room.day}</td>
                  <td>{room.zodiac}</td>
                  <td>{room.chakra}</td>
                  <td>{room.artistsWay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AbodeHome;
