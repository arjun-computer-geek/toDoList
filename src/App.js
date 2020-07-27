import React, {useState, useEffect, useRef} from 'react';



function App(){
    const [current, setCurrent] = useState("");
    const [items, setItem] = useState([]);
    const inputRef = useRef(null);
    
    useEffect(() =>{
        inputRef.current.focus();
    })
    function addCurrent(e){
        if(e.target.value !== ""){
        setCurrent(e.target.value);
        }
    }
    function addItems(e){
        e.preventDefault();
        const item = {task : current, key : Date.now()};
        setItem([...items, item]);
        inputRef.current.value = "";
    }
    function deleteItem(key) {
        const filteredItems = items.filter(item => item.key !== key);
        setItem(filteredItems);
    }
   return(
        <div className='app'>
        <h1>ToDo List.</h1>
        <form onSubmit={addItems}>
            <label for='task'>Add Task : </label>
            <br/>
            <input 
                id='task'
                type='text' 
                placeholder='Your Task.' 
                alt='input Your Task'
                onChange={addCurrent}
                ref={inputRef}
                />
                &nbsp; &nbsp; 
            <button type='submit'> Add</button>
        </form>
        <div>
            <ul>
                {items.map(item =>(
                    <li key={item.key}>{item.task} <span onClick={() => deleteItem(item.key)}>&times;</span></li>
                ))}
            </ul>
        </div>
        </div>
    );
}
export default App;