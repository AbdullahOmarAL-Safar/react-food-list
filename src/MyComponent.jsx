import { useState } from 'react';
import './index.css'; 
function MyComponont() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange", "Kiwi"])

    function handleAddFood(){
    
    const newFood = document.getElementById("foodsInput").value;
    document.getElementById("foodsInput").value = "";

    setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }
    return(
        <div class="dark">
            <ul>
                {foods.map((foods, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {foods}
                </li>)}
            </ul>
            <input type="text" id='foodsInput' placeholder='Enter the name of the food'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default MyComponont;
