"use client";
import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response);
        setTitle(response.title);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {title.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <h1>hello king next body whats up</h1>
    </div>
  );
}