import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import DatePicker from "react-datepicker";
import DatePicker1 from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Calender(props) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filterValue, setFilterValue] = useState();
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [startUnixTime, setStartUnixTime] = useState();
  const [endUnixTime, setEndUnixTime] = useState();

  function getStartDate_TZ_SG(date_now) {
    let sg_hr = date_now.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: "Asia/Singapore",
    });
    let ye = date_now.toLocaleString("en-US", {
      year: "numeric",
      timeZone: "Asia/Singapore",
    });
    let mo = date_now.toLocaleString("en-US", {
      month: "2-digit",
      timeZone: "Asia/Singapore",
    });
    let da = date_now.toLocaleString("en-US", {
      day: "2-digit",
      timeZone: "Asia/Singapore",
    });
    let start_dt_sg =
      ye +
      "-" +
      mo +
      "-" +
      da +
      "T" +
      zeroPad(date_now.getHours(), 2) +
      ":" +
      zeroPad(date_now.getMinutes(), 2) +
      ":00.000+08:00";
    console.log("start_dt_sg  ", start_dt_sg);
    let date_reset = new Date(start_dt_sg);
    return date_reset;
  }
  const zeroPad = (num, places) => String(num).padStart(places, "0");

  const customFilter = () => {
    let start_Date = getStartDate_TZ_SG(startDate);
    let end_Date = getStartDate_TZ_SG(endDate);
    setStartUnixTime(start_Date.valueOf());
    setEndUnixTime(end_Date.valueOf());
  };

  const absoulteFilter = (data_date) => {
    console.log(data_date);
    let abValue = getStartDate_TZ_SG(data_date);
  };
  return (<>
      <Breadcrumbs title="Settings" breadcrumbItem="Settings" />
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8">
          <label style={{ display: "inline-flex",marginRight:"2rem", }}
            onClick={() => {
              setOpen(true);
            }}
          >
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  var utc = date.toUTCString();
                  console.log("1234567", utc.split("G"));
                  setStartDate(date);
                  setEndDate(new Date(date.getTime() + 1000 * 60 * 60 * 24));
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy hh:mm aa" //Format the date
                closeOnScroll={true} // Close on scroll
                showTimeInput
                placeholderText="start date"
                minDate={new Date()}
                open={open}
                fixedHeight
                // onClickOutside={()=>{setOpen(false)}}
                className="col-sm-6 col-md-6 col-lg-6"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  setOpen(false);
                }}
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                selectsEnd
                dateFormat="dd/MM/yyyy hh:mm aa" //Format the date
                closeOnScroll={true} // Close on scroll
                timeIntervals={15}
                showTimeInput
                placeholderText="End date"
                showDisabledMonthNavigation
                open={open}
                fixedHeight
                // onClickOutside={()=>{setOpen(false)}}
                className="col-sm-6 col-md-6 col-lg-6"
              />
          </label>

        <div class="col-sm-4 col-md-4 col-lg-6">
          <Button
            onClick={() => {
              customFilter();
            }}
          >
            {" "}
            Click here to check the unix time
          </Button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
      </div>
    </div>
    </>
  );
}


// function oldRpicker(){
//     import React, { useState } from "react";
// import Breadcrumbs from "./Breadcrumbs";
// import DatePicker from "react-datepicker";
// import DatePicker1 from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
// import Calender from "./Calender";

// export default function Settings(props) {
//   const [open,setOpen]=useState(false)
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [filterValue,setFilterValue] = useState();
//   const handleCalendarClose = () => console.log("Calendar closed");
//   const handleCalendarOpen = () => console.log("Calendar opened");
//   const [startUnixTime,setStartUnixTime]= useState();
//   const [endUnixTime,setEndUnixTime]= useState();

//   function getStartDate_TZ_SG(date_now) {
//     let sg_hr = date_now.toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: 'Asia/Singapore' });
//     let ye = date_now.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Singapore' });
//     let mo = date_now.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Singapore' });
//     let da = date_now.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Singapore' });
//     let start_dt_sg = ye + "-" + mo + "-" + da + "T" + zeroPad(date_now.getHours(), 2) + ":"+zeroPad(date_now.getMinutes(), 2)+":00.000+08:00";
//     console.log('start_dt_sg  ',start_dt_sg)
//     let date_reset = new Date(start_dt_sg);
//     return date_reset;
//   }
//   const zeroPad = (num, places) => String(num).padStart(places, '0')

//   const customFilter = () =>{
//     let start_Date = getStartDate_TZ_SG(startDate);
//     let end_Date = getStartDate_TZ_SG(endDate);
//     setStartUnixTime(start_Date.valueOf());setEndUnixTime(end_Date.valueOf())
//   }

//   const absoulteFilter = (data_date) => {
//     console.log(data_date);
//     let abValue = getStartDate_TZ_SG(data_date);
//     console.log('abValue',abValue)
//     console.log('abValue  ',abValue.valueOf())
//   }
//   console.log('open',open)
//   return (
//     <>
//       <Breadcrumbs title="Settings" breadcrumbItem="Settings" />
//       <br/>
//       <div style={{background: "#d3d3d33d",border: "1px solid lightgrey",padding: "1rem"}}> Filter :&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("today"); absoulteFilter(new Date())}}>Today</button>&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("yesterday");}}>Yesterday</button>&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("7days");}}>Last 7 Days</button>&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("30days");}}>Last 30 Days</button>&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("thisMonth");}}>This Month</button>&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("lastMonth");}}>Last Month</button>&nbsp;&nbsp;
//       <button type="button" class="btn btn-outline-primary btn-sm" onClick={()=>{setFilterValue("custom");}}>Custom</button>&nbsp;&nbsp;
//       </div>
//       <br/>
//       <br/>
//       <div style={{display:filterValue === "custom"?"inline-flex":"none"}} className="col-sm-12">
//         <label className="col-sm-6" style={{ display: "inline-flex",marginRight:"2rem", }} onClick={()=>{setOpen(true)}}>
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => {
//               var utc =  date.toUTCString();
//               console.log('1234567',utc.split("G"))
//               setStartDate(date);
//               setEndDate(new Date(date.getTime() + 1000 * 60 * 60 * 24));
//             }}
//             selectsStart
//             startDate={startDate}
//             endDate={endDate}
//             dateFormat="dd/MM/yyyy hh:mm aa" //Format the date
//             closeOnScroll={true} // Close on scroll
//             showTimeInput
//             placeholderText="start date"
//             minDate={new Date()}
//             open={open}
//             fixedHeight
//             // onClickOutside={()=>{setOpen(false)}}
//           />
//           <DatePicker
//             selected={endDate}
//             onChange={(date) => {setEndDate(date);setOpen(false)}}
//             startDate={startDate}
//             endDate={endDate}
//             minDate={startDate}
//             selectsEnd
//             dateFormat="dd/MM/yyyy hh:mm aa" //Format the date
//             closeOnScroll={true} // Close on scroll
//             timeIntervals={15}
//             showTimeInput
//             placeholderText="End date"
//             showDisabledMonthNavigation
//             open={open}
//             fixedHeight
//             // onClickOutside={()=>{setOpen(false)}}
//           />
//         </label>
//         <Button className="col-sm-4" onClick={()=>{customFilter()}} > Click here to check the unix time</Button>
//         <br/>
//         <br/>
//       </div>
//       <div >
//         <h6 >Unix start time : {startUnixTime}</h6>
//         <br/>
//         <h6>Unix end time: {endUnixTime}</h6>
//       </div>
//       <Calender/>
//     </>
//   );
// }


// // function OneDatePickerRange(props){
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [endDate, setEndDate] = useState(null);
// //   const onChange = (dates) => {
// //     console.log('dates',Array.isArray(dates),dates)
    
// //     if(Array.isArray(dates)){
// //       const [start, end] = dates;
// //       setStartDate(start);
// //       setEndDate(end);
// //     }else{
// //       let arr = [];
// //       console.log('dates',dates)
// //     }
// //   };
// //   return (
// //     <DatePicker
// //       selected={startDate}
// //       onChange={onChange}
// //       startDate={startDate}
// //       endDate={endDate}
// //       selectsRange
// //       showTimeInput
// //     />
// //   );
// // };
// }
