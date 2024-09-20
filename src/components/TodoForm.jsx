import React, { useState } from 'react'


function TodoForm() {
   

    const [list, setlist] = useState(["apple","orange"]);
    const[elist,setelist]=useState("")
  
   const handleChange=(e)=>{
   
        setelist(e.target.value)   
   }
   const addItem=()=>{
    const trimList=elist.trim()
    if(trimList)
       setlist([...list,trimList])
       setelist("")
   }
   const deleteItem = (removeId) => {
    const updatedList = list.filter((item, index) => {
        if(index !== removeId)
{
    return true
}   });
    setlist(updatedList);
};
console.log(list)
    return (
        <div className='container'>
            <h2>Add fruits in your cart</h2>
            <div>
            <input type="text"  onChange={handleChange} value={elist}/>
            <button onClick={addItem}>add</button>
            </div>
            <div className='list'>
            {
                list.map((item,id)=>{
                    return <h1>{id+1}.{item} <button onClick={()=>deleteItem(id)}>delete</button></h1>
                })
            }
            </div>
        </div>
    )
}

export default TodoForm