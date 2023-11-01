import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
    const links = [{name: "Home", link:"/"},{name: "Cities", link: "/cities"},{name: "Checkout", link: "/checkout"}, {name: "About", link: "/about"}]
    return (
        <>
        {
            links.map((link, i)=>(
                    <li key={i} className='font-Poppins hover:text-elemental flex align-center justify-center'>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
            ))
        }
            
        </>
    );
};

export default Navlinks;