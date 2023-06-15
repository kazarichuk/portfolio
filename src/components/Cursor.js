import React, { useState, useEffect, useCallback } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setHidden(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onMouseMove = useCallback((e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  }, []);

  const addCursorStyles = useCallback((styleName) => {
    document.querySelector(".cursor").classList.add(styleName);
  }, []);

  const removeCursorStyles = useCallback((styleName) => {
    document.querySelector(".cursor").classList.remove(styleName);
  }, []);

  const onMouseDown = useCallback(() => {
    addCursorStyles("clicked");
  }, [addCursorStyles]);

  const onMouseUp = useCallback(() => {
    removeCursorStyles("clicked");
  }, [removeCursorStyles]);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, [onMouseMove, onMouseDown, onMouseUp]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove, onMouseDown, onMouseUp]);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  return (
    <div
      className={`cursor ${hidden ? 'hidden' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
