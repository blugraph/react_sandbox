import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";

export default function Settings(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [startUnixTime,setStartUnixTime]= useState();
  const [endUnixTime,setEndUnixTime]= useState();

  function getStartDate_TZ_SG(date_now) {
    let date_sg = date_now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' });
    let date_reset = new Date(date_sg);
    return date_reset;
  }

  const callapi = () =>{
    let start_Date = getStartDate_TZ_SG(startDate);
    let end_Date = getStartDate_TZ_SG(endDate);
    setStartUnixTime(start_Date.valueOf());setEndUnixTime(end_Date.valueOf())
  }
  return (
    <>
      <Breadcrumbs title="Settings" breadcrumbItem="Settings" />
      <br/>
      <div style={{ display: "inline-flex",marginRight:"2rem" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(new Date(date.getTime() + 1000 * 60 * 60 * 24));
            // setStartUnixTime(getStartDate_TZ_SG(startDate))
          }}
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy hh:mm aa" //Format the date
          closeOnScroll={true} // Close on scroll
          showTimeInput
          shouldCloseOnSelect={true} //  hide calendar on date selection
          placeholderText="start date"
          minDate={new Date()}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => {setEndDate(date);}}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy hh:mm aa" //Format the date
          closeOnScroll={true} // Close on scroll
          timeIntervals={15}
          showTimeInput
          placeholderText="End date"
          showDisabledMonthNavigation
          timeCaption
        />
      </div>
      <Button onClick={()=>{callapi()}} > Click here to check the unix time</Button>
      <br/>
      <br/>
      <div >
        <h6 >Unix start time : {startUnixTime}</h6>
        <br/>
        <h6>Unix end time: {endUnixTime}</h6>
      </div>
    </>
  );
}
