import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const HeartBtn = () => {
    const [loved, setLoved] = useState(false);

    return (
        <button className='font-medium text-2xl text-white' onClick={()=>setLoved(!loved)}>{loved ? <AiFillHeart/> : <AiOutlineHeart/> } </button>
    );
};

export default HeartBtn;