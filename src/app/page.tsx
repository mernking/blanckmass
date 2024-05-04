import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}