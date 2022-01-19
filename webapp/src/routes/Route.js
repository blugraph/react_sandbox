/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import {React,createContext, useContext,useState} from "react";
import { createBrowserHistory } from "history";
import Dashboard from "../components/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TableList from "../components/TableList";
import VerticalLayout from "../components/VerticalLayout/VerticalLayout";
import { Container } from "react-bootstrap";
import Projects from "../components/Projects";
import MapsContainer from "../components/MapsContainer";
import Settings from "../components/Settings";
import {ToggleContext} from '../components/ToggleContext';

const history = createBrowserHistory();
const UserContext = createContext();
export default function Routers(props) {
  const [date,setDate]=useState();
  const [toggleValue,setToggleValue]= useState(false);
  const setToggleVal = (data) => {setToggleValue(data)}
  const setDateVal = () => {setDate(new Date())}
  return (
    <BrowserRouter>
    <ToggleContext.Provider value={{toggleValue:toggleValue,setToggleVal:setToggleVal,setDateVal:setDateVal}} toggleValue={toggleValue} setToggleVal={setToggleVal}>
      <VerticalLayout/>
      <div className="main-content">
        <div className="page-content">
          <Container fluid>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<TableList />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/maps" element={<MapsContainer />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </div>
      </div>
      </ToggleContext.Provider>
    </BrowserRouter>
  );
}
