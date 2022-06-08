import {React,useContext, useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ToggleContext,useToggle } from '../ToggleContext'

export default function VerticalLayout(props){
    const [search, setsearch] = useState(false);
    const tToggle =()=> {
        var body = document.body;
        setsearch(false)
        if (window.screen.width <= 998) {
          body.classList.toggle("sidebar-enable");
        } else {
          body.classList.toggle("vertical-collpsed");
          body.classList.toggle("sidebar-enable");
        }
      }
    return(
        <>
            <Header {...props} tToggle={tToggle}/>
            <Sidebar {...props} tToggle={tToggle}/>
        </>
    )
}

