import React from 'react';
import './Bg.css';


export default function Bg() {
    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/file.png`} alt='caca' className='bg'/>
            
        </>
    )

}