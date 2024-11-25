import React  from "react";
import { useState } from "react";
import Data from '../Data.json'
const Categories = ()=>
{
  const [state,setstate]=useState();
  

  return (

    <div>
      
      




     {console.log(Data.map(User=>{
      <div key={User.category="Beach Houses"}>
         <div className="listing-card">
      
      <img src={User.image} alt={User.title} className="listing-image" />

    
      <h2 className="listing-title">{User.title}</h2>

      
      <p className="property-type">{User.propertyType}</p>

      
      

      
      <p className="price">${User.price} per night</p>

      
      <p className="rating">⭐ {User.rating}</p>
    </div>


      </div>
     }))
     }


    </div>
  );


};
export default Categories;