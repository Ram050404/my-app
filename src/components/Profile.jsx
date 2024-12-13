import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css';
import { BiBook } from 'react-icons/bi';
import userimage from '../assets/images/yujin.jpg';

const Profile=()=> {

  const skills=[
    {
      title: 'flutter',
      icon:  <BiBook /> ,
      pers:  '50%',
    },
    {
      title: 'html css',
      icon:  <BiBook /> ,
      pers:  '50%',
    },
    {
      title: 'react js',
      icon:  <BiBook /> ,
      pers:  '20%',
    },
    {
      title: 'java',
      icon:  <BiBook /> ,
      pers:  '80%',
    },
     
  ]
  
  return (
    
    <div className='profile'>
     <ProfileHeader/>
     <div className="user--profile">
      <div className="user--details">
        <img src={userimage}/>
        <h3 className="username">Benali Mohamed</h3>
          <span className="level">L3 TI</span>
          
      </div>
      <div className="user-course">
            {skills.map((item)=>(
              <div className="course">
                <div className="course-detail">
                <div className="course--cover">{item.icon}</div>
                <div className="course-name">
                <h5 className="title">{item.title}</h5>
                <span className="percentage">{item.pers}</span>
                </div></div></div>
            ))}

      </div>
     </div>
    </div>
    
    )
}

export default Profile