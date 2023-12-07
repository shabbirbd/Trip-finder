import { DatePicker } from "keep-react";
import { useState } from "react";


const Calander = () => {
    const [rangeDate, setRangeDate] = useState(null);
   
    return (
            <>
                <DatePicker showTwoMonth={true} rangeDate={setRangeDate} placeholder="Start - Finish">
                    <DatePicker.Range />
                </DatePicker>
            </>
    );
};

export default Calander;