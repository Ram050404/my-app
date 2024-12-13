import React from 'react';
import {BiCheckCircle} from "react-icons/bi";
import { MdDoNotDisturbOn } from "react-icons/md";
import { SiStagetimer } from "react-icons/si";



const StatCard = () => {
  let acc = 2; 
  let pen = 2; 
  let ref = 3; 

  const stat = [
    {
      icon : <BiCheckCircle/>,
      title: 'Accepted',
      value: acc,
    },
    {
      icon : <MdDoNotDisturbOn/>,
      title: 'Rejected',
      value: ref,
    },
    {
      icon : <SiStagetimer/>,
      title: 'Pending',
      value: pen,
    },
  ];

  return (
    <>
    <br/>
    
      <div className="card--container">
      {stat.map((item) => (
        <div className="card">
          <div className="card--row">
          <div className="card--value">{item.value}</div>
          <div className="card--icon">{item.icon}</div>
         
          </div>
          <div className="card--title">{item.title}</div>
        </div>
      ))}
    </div>
    
    
    </>
  
  );
};

export default StatCard;
