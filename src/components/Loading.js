import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material/";
import {Row, Col, Button, Stack} from "react-bootstrap/";
import { NavLink } from 'react-router-dom';
import logo from '../light-bulb.svg';

export default function Loading(){
    return (
        <div className="App">
        <header className="App-loading">
            <br></br>
            <br></br>
            <br></br>
            <p>
              Loading Page Here
            </p>
            <br></br>
        </header>
        </div>
    );
}