// Dropdown.tsx
import React from 'react';

interface DropdownProps {
  isOpen: boolean;
  items: { label: string; href: string; hoverColor: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, items }) => {
  console.log('items', items);
  return (
    <>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {items.map((item, index) => (
            <div
              className={`m-1 hover:bg-${item.hoverColor}-50 rounded-lg hover:text-${item.hoverColor}-500`}
              role="none"
              key={index}
            >
              <a
                href={item.href}
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;

const indigoText = 'hover:text-indigo-500';
const blueText = 'hover:text-blue-500';
const greenText = 'hover:text-green-500';
const redText = 'hover:text-red-500';
const indigoBg = 'hover:bg-indigo-50';
const blueBg = 'hover:bg-blue-50';
const greenBg = 'hover:bg-green-50';
const redBg = 'hover:bg-red-50';
