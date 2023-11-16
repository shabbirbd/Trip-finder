import React, { useState } from 'react';
import DatePicker from "react-datepicker";

const Calander = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            monthsShown={2}
            inline
            />   
    );
};

export default Calander;