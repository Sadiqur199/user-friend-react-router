import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDtel.css'

const FriendDtel = () => {
  const friend = useLoaderData()
  const Navigate = useNavigate();
  // console.log(friend)
  const handelNavigate = ()=>{
    Navigate(-1);
  }
  return (
    <div>
      <h4>Everithing about this person is here</h4>
      <div className='friend-details'>
      <h5>Name : {friend.name}</h5>
      <p>Phone:{friend.phone}</p>
      <p>Email: {friend.email}</p>
      <button onClick={handelNavigate}>Back the Font page</button>
      </div>
    </div>
  );
};

export default FriendDtel;