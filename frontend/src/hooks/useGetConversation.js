import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversations=()=>{
    const[loading,setLoading]=useState(false);
    const[conversations,setConversations]=useState([]);
   
    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true);
            try{
                const {data}=await axios.get("/users").catch((err)=>{
                    throw new Error(err.response.data.error)
                     })
                     setConversations(data)

            }catch(error){ toast.error(error.message);
        }finally{
            setLoading(false)
        }
        }
        getConversations();

    },[])
  return {loading,conversations};  
}
export default useGetConversations;