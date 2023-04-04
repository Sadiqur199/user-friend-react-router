import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friends from '../Friends/Friend';
import './Friends.css'
const Friend = () => {
  const friends = useLoaderData();
  // console.log(friends)
  return (
    <div>
      <p>This is the friends{friends.length}</p>
     <div className='friends'>
     {
        friends.map(friend => <Friends
         key={friend.id}
         friend = {friend}
        ></Friends>)
      }
     </div>
    </div>
  );
};

export default Friend;