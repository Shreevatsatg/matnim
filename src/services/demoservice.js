import axios from 'axios';

const demoService=async()=>{
try{
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/demo-videos`,
      { withCredentials: true } );
  return response.data;
}
catch(error){
throw new Error(error.response?.data?.error || 'Failed to create animation');
}
}
export {demoService};