import React,{ createContext,useContext,useEffect ,useState} from "react";

const TodoContext  =React.createContext()
const url =  'https://jsonplaceholder.typicode.com/todos';

const ToDoProvider = ({children})=>{
    const [detail,setDetail]= useState([])
    const fetchDetail  = async ()=>{
        try{
            const response = await fetch(url)
            const detail = await response.json() 
            setDetail(detail)
      
        
        }catch(error){
            console.log(error)
        }
    }
useEffect(()=>{
 fetchDetail()
},[])

return(
    <TodoContext.Provider value={{detail}} >
            {children}
    </TodoContext.Provider>
)
}
export const useGlobalContext = () =>{
return useContext(TodoContext)
};
export {ToDoProvider,TodoContext}


