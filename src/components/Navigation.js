import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Entertainment </NavLink>
          <NavLink to="/kitchen">Kitchen </NavLink>
          <NavLink to="/personal">Personal </NavLink>
       </div>
    );
}
 
export default Navigation;