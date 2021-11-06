import React from 'react';
 
import { NavLink } from 'react-router-dom';
import {Row, Col, Button, Stack} from "react-bootstrap/";

const pages = ["/", "kitchen", "Hygenic", "Environmental", "Cleaning", "ConsumerElectronics"]
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Entertainment </NavLink>
          <NavLink to="/kitchen">Kitchen </NavLink>
          <NavLink to="/hygenic">Hygenic </NavLink>
          <NavLink to="/environmental">Environmental </NavLink>
          <NavLink to="/cleaning">Cleaning </NavLink>
          <NavLink to="/ConsumerElectronics">ConsumerElectronics </NavLink>
          <NavLink to="/loading">Loading </NavLink>
          <NavLink to="/results">Results </NavLink>
          <Button>submit</Button>
       </div>
    );
}
 
export default Navigation;