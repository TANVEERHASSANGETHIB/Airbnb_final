import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [response, setResponse] = useState([]);  
  const functionim = async () => {
    try {
     
      console.log("Enter in the Contact Try");
      const res = await axios.get("http://localhost:3000/");

      
      if (Array.isArray(res.data)) {
        setResponse(res.data);  
        console.log(res.data);   
      } else {
        console.error("Response is not an array", res.data);
        setResponse(["Error: Data is not an array"]);  
      }
    } catch (error) {
      console.error(error);
      setResponse(["Error: " + error.message]); 
    }
  };

  return (
    <div>
      <button onClick={functionim}>BUTTON</button>
      <p>Response:</p>
      <ul>
      
        {response.length > 0 ? (
          response.map((item, index) => (
            <li key={index}>
           
              {item.name || JSON.stringify(item)} 
            </li>
          ))
        ) : (
          <p>No data available</p>  
        )}
      </ul>
    </div>
  );
};

export default Contact;
