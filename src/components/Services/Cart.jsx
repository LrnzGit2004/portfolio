import React from 'react';
import Button from '../Button';
import { FaArrowRight } from 'react-icons/fa';

const Cart = ({ title, description }) => {
    return (
        <div className='border-2 border-[#1C6961] bg-gradient-to-r from-[#0D2D2A] to-[#111C1B] h-[100%] p-[30px] my-5'>
            <h1 className='text-4xl bg-transparent'>{title}</h1>
            <p className='py-5 bg-transparent'>
                {description}<span className='text-[#0EB39E] bg-transparent'> Lire plus...</span>
            </p>
            <Button>
                Louer ce service <FaArrowRight className='bg-transparent'/>
            </Button>
        </div>
    );
};

export default Cart;