import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

//TODO Update for reusable component!

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState();

  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <h3>{date}</h3>
    </>
  );
}

export default Calendar;
