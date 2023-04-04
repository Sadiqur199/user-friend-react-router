import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';
const Friends = ({friend}) => {
  const {name,email,phone,id } = friend;
  const Navigate = useNavigate()
  const handleNavigation = () =>{
     Navigate(`/friend/${id}`)
  }

  return (
    <div className='friend'>
      <h4>Name:{name}</h4>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <button><Link to = {`/friend/${id}`}>Show Me details</Link></button>
      <button onClick={handleNavigation}>With Button Handelar</button>
    </div>
  );
};

export default Friends;