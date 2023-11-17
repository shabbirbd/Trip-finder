import { useState } from 'react';

const Calander = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
            <>
                Date Picker
            </>
    );
};

export default Calander;