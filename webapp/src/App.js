import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import './assets/scss/Layout.scss';
import TableList from "./components/TableList";

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tables" element={<TableList />} />
      </Routes>
    </BrowserRouter>

);

export default App;
