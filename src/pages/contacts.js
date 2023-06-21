import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';  
import TelegramContainer from '../components/telegram-container';
import BottomFooter from '../components/bottom-footer';
import './contacts.css';
import axios from 'axios';  // You need to install axios

const Contacts = () => {
  const navigate = useNavigate();

  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false); 
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [lastClientX, setLastClientX] = useState(0);
  const [lastClientY, setLastClientY] = useState(0);

  const onDragStart = (event) => {
    event.preventDefault();
    setDragging(true);
    setLastClientX(event.clientX);
    setLastClientY(event.clientY);
  };

  const onDragEnd = () => {
    setDragging(false);
  };

  const onDrag = (event) => {
    if (dragging) {
      const dx = event.clientX - lastClientX;
      const dy = event.clientY - lastClientY;
      setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
      setLastClientX(event.clientX);
      setLastClientY(event.clientY);
    }
  };

  const onWORKTextClick = useCallback(() => {
    navigate('/work');
  }, [navigate]);

  const onABOUTMEClick = useCallback(() => {
    navigate('/about');
  }, [navigate]);

  const onMouseEnter = () => { 
    setHovering(true);
  };

  const onMouseLeave = () => { 
    setHovering(false);
  };

  // Calendly API example: Fetching the user's Calendly account info
  useEffect(() => {
    const fetchCalendlyInfo = async () => {
      try {
        const response = await axios.get('https://api.calendly.com/v1/users/me', {
          headers: { 'Authorization': `Bearer ${process.env.REACT_APP_CALENDLY_TOKEN}` }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCalendlyInfo();
  }, []);

  return (
    <div className='contacts2' onMouseMove={onDrag} onMouseUp={onDragEnd}>
      <div className="header3">
        <div className="box-32">
          <div className="box-3-child1" />
          <div className="box-3-child1" />
        </div>
        <div className="box-22">
          <div className="box-2-child2" />
          <div className="box-3-child1" />
        </div>
        <div className="box-12">
          <div className="work2" onClick={onWORKTextClick}>
            WORK
          </div>
          <div className="about-me2" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <b className="contacts3">CONTACTS</b>
        </div>
        
      </div>

      <TelegramContainer />
      <Button 
            variant="outlined" 
            onClick={() => window.open('https://calendly.com/kazarichuk', '_blank')}
          >
            Book an appointment
          </Button>
      <img
        className='contact-img-icon1'
        alt=''
        src='/contact-img1@2x.png'
        style={{
          position: 'absolute',
          left: translate.x,
          top: translate.y,
          cursor: dragging ? 'grabbing' : 'grab',  // change the cursor when dragging
          transform: hovering ? 'scale(1.1)' : 'none',  // scale the image when hovering
        }}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseEnter={onMouseEnter}  // add this line
        onMouseLeave={onMouseLeave}  // add this line
      />
        <BottomFooter
        productIds="/icons5.svg"
        productIds24x24="/icons6.svg"
        productIds24x24x="/icons8.svg"
        productIdsRel="noreferrer"
      />
      
    </div>
  );
};

export default Contacts;
