import React from 'react';

export default function Cell({ value, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px',
                border: '1px solid black',
                backgroundColor: isSelected ? '#f0e68c' : 'white',
                fontSize: '20px',
                cursor: 'pointer',
                userSelect: 'none'
            }}
        >
            {value !== 0 ? value : ''}
        </div>
    );
}
