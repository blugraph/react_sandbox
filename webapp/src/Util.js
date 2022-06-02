import { useEffect, useState } from "react";
// import { Auth } from "aws-amplify";

export function getStartDate_TZ_SG(date_now) {
    console.log('getStartDate_TZ_SG', date_now)
    let ye = date_now.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Singapore' });
    let mo = date_now.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Singapore' });
    let da = date_now.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Singapore' });
    let start_dt_sg = ye + "-" + mo + "-" + da + "T" + zeroPad(date_now.getHours(), 2) + ":" + zeroPad(date_now.getMinutes(), 2) + ":00.000+08:00";
    let date_reset = new Date(start_dt_sg);
    return date_reset;
}
const zeroPad = (num, places) => String(num).padStart(places, '0')



function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
}

export function dateRange_sg(date_now) {
    let sg_hr = date_now.toLocaleString('en-US', { hour: '2-digit', hour12: false, timeZone: 'Asia/Singapore' });
    let min = date_now.toLocaleString('en-US', { minute: '2-digit', hour12: false, timeZone: 'Asia/Singapore' });
    let sec = date_now.toLocaleString('en-US', { second: '2-digit', hour12: false, timeZone: 'Asia/Singapore' });
    let ye = date_now.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Singapore' });
    let mo = date_now.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Singapore' });
    let da = date_now.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Singapore' });
    // let dt_sg = ye + '-' + mo + '-' + da + '   ' + sg_hr + ':' + min + ':' + sec;
    let dt_sg = ye + "-" + mo + "-" + da + " " + zeroPad(sg_hr, 2) + ":" + zeroPad(min, 2) + ":" + zeroPad(sec, 2);
    return dt_sg
}

export function dateRange(date_now) {
    let ye = date_now.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Singapore' });
    let mo = date_now.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Singapore' });
    let da = date_now.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Singapore' });
    // let dt_sg = ye + '-' + mo + '-' + da + '   ' + sg_hr + ':' + min + ':' + sec;
    let dtsg = ye + mo + da
    return dtsg
}



// export async function getToken() {
//     const token = await Auth.currentSession()
//     //console.log(token)
//     const idToken = token.idToken.jwtToken
//     //console.log(idToken, 'idToken')
//     return idToken
// }