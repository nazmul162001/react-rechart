import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
  const [phons, setPhones] = useState([])

  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=phone')
    .then(data => {
      const loadedData = data.data.data;
      const phoneData = loadedData.map(phone => {
        const parts = phone.slug.split('-');
        const ph = {
          name: parts[0],
          value: parseInt(parts[1])
        };
        return ph;
      })
      setPhones(phoneData);
      console.log(phoneData);
    })
  },[])
  return (
    <BarChart width={1000} height={500} data={phons}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey= 'name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
    </BarChart>
  );
};

export default SpecialChart;