import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./contact-container.css";

const ContactContainer = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000); // Reset the copied text after 2 seconds
  };

  return (
    <div className="contact-box">
      <div className="contact-box-child" />
      <div className="contact-box-item" />
      <div className="box-25">
        <div className="box-2-child8" />
        <div className="box-2-child9" />
        <div className="box-2-child10" />
        <CopyToClipboard text='kazarichuk@gmail.com' onCopy={() => handleCopy('Email copied!')}>
          <b className="kazarichukgmailcom">kazarichuk@gmail.com</b>
        </CopyToClipboard>
        <CopyToClipboard text='+998 91 004 80 43' onCopy={() => handleCopy('Phone number copied!')}>
          <b className="b">+998 91 004 80 43</b>
        </CopyToClipboard>
        <CopyToClipboard text='@kazarichuk' onCopy={() => handleCopy('Username copied!')}>
          <b className="kazarichuk">@kazarichuk</b>
        </CopyToClipboard>
      </div>
      {copiedText && <p className="copy-message">{copiedText}</p>}
    </div>
  );
};

export default ContactContainer;
