import React, { useState, useEffect } from 'react';
import axios from 'axios';

const USSDRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Make sure to replace with your backend URL
        const response = await axios.get('http://localhost/bridge/get-ussd-requests.php', {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching USSD requests:", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h1>USSD Requests</h1>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>{request}</li>
        ))}
      </ul>
    </div>
  );
};

export default USSDRequests;
