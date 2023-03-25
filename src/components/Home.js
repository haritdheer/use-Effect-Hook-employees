import React,{useState,useEffect} from 'react'

 const Home = () => {
    const[state,setState]=useState(2);
    const[data,setData]=useState([]);
  
  useEffect(()=>{
  async function getData(){
    const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
  
    const res=await get.json();
  
    setData(res);
    
  }
  getData();
  
  document.title=`(${state}) No.of Employees`;
  },[state])

  return (
    <div> <button className='btn' onClick={()=>setState(state+2)}>Click {state}</button>
    {
      data.map((e,index)=>{
        return(
          <div className='dtl' key={index}>
            <h4>{e.firstName}</h4>
            <h4>{e.lastName}</h4>
            <h4>{e.email}</h4>
          </div>
        )
      })
    }</div>
  )
}
export default Home
