import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Loader from '../Loader/Loader';

const Charts = ({ api }) => {
  const [mlData, setMLData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
      
        setMLData(response.data);
      } catch (error) {
        console.error('Error fetching ML data:', error);
      }
    };

    fetchData();
  }, [api]);

  if (!mlData || mlData.length === 0) {
    return <div> <Loader/> </div>;
  }

  const labels = mlData.map(entry => entry.label);
  const percentages = mlData.map(entry => entry.percentage);

  const data = {
    labels,
    datasets: [
      {
        data: percentages,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9966FF'],
      },
    ],
  };

  return (
    <div>
      <h2>Progress Report</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Charts;
