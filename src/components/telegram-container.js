import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';  // you need to install this
import './telegram-container.css';

const TelegramContainer = () => {
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    if (copiedText !== '') {
      const messageElement = document.querySelector('.copy-message');

      // Remove the fadeout class to reset the animation
      messageElement.classList.remove('fadeout');

      // Start the fade-out animation after a short delay
      setTimeout(() => messageElement.classList.add('fadeout'), 3000);
    }
  }, [copiedText]);  // Only run this effect when copiedText changes

  const handleCopy = (text) => {
    setCopiedText(text);
  };
  
  return (
    <div className="contact-box1">
      <div className="contact-box-inner" />
      <div className="contact-box-child1" />
      <div className="box-26">
        <div className="box-2-child11" />
        <div className="box-2-child12" />
        <div className="box-2-child13" />
        <div className="email-wrapper">
          <b className="email">EMAIL</b>
        </div>
        <CopyToClipboard text='kazarichuk@gmail.com' onCopy={() => handleCopy('Email copied!')}>
          <button aria-label="Copy email to clipboard" className="kazarichukgmailcom1">
            kazarichuk@gmail.com
          </button>
        </CopyToClipboard>
        <CopyToClipboard text='+1 334 490 88 28' onCopy={() => handleCopy('Phone number copied!')}>
          <button aria-label="Copy phone number to clipboard" className="b1">
            +1 334 490 88 28
          </button>
        </CopyToClipboard>
        <CopyToClipboard text='@kazarichuk' onCopy={() => handleCopy('Username copied!')}>
          <button aria-label="Copy username to clipboard" className="kazarichuk1">
            @kazarichuk
          </button>
        </CopyToClipboard>
        <div className="phone-num-wrapper">
          <b className="email">PHONE NUM.</b>
        </div>
        <div className="telegram-wrapper">
          <b className="email">TELEGRAM</b>
        </div>
      </div>
      {copiedText && <p className="copy-message">{copiedText}</p>}
    </div>
  );
};

export default TelegramContainer;
