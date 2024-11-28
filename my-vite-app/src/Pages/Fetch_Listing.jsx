import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch_Listing = ({ setListings }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const functionim = async () => {
    try {
      console.log("Fetching data...");

      const res = await axios.get("http://localhost:3000/listing");

      if (Array.isArray(res.data)) {
        setListings(res.data);  
      } else {
        console.error("Response is not an array", res.data);
        setError("Error: Data is not an array");
      }
    } catch (error) {
      console.error(error);
      setError("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    functionim();  
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return null;  
};

export default Fetch_Listing;
