import { useEffect,useState } from 'react';
 const Data=()=>{
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // console.log(data);
        // onDataFetched(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
}
export default Data




