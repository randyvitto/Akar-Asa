import React, { useState, useRef, useEffect } from 'react';

const CustomSelect = ({ options, placeholder = "Select", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="custom-select-wrapper" ref={dropdownRef}>
      <div 
        className="custom-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption || placeholder}</span>
        <div className={`custom-select-arrow ${isOpen ? 'open' : ''}`}>▼</div>
      </div>
      {isOpen && (
        <div className="custom-select-dropdown">
          {options.map((option, index) => (
            <div
              key={index}
              className="custom-select-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;