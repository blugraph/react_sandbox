import {React,useContext} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ToggleContext,useToggle } from '../ToggleContext'

export default function VerticalLayout(props){
    return(
        <>
            <Header {...props}/>
            <Sidebar {...props}/>
        </>
    )
}

