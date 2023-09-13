import {useState,useEffect} from 'react'
const useFetch=(token)=>{
    const [alljobs,setAlljobs]=useState([]);
    const getJobs=async()=>{
        let response = await fetch('http://scholarshiftapi.divasdoor.com/api/getAllJob',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 
            `Bearer ${token}`  
        }});
        let result = await response.json()
        setAlljobs(result.data);  
    } 
    useEffect(() => {
        getJobs();
    },[])
    return {alljobs};
}
export default useFetch;