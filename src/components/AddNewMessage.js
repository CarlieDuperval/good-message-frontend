import { ReactDOM } from "react";
import { useState } from "react";

const AddGoodMessage = () => {

    const [message, setMessage] = useState("");
    const handleSubmit = () => {
        fetch("https://good-message-backend.web.app/goodMessages", {
            method: "POST",
            body: JSON.stringify({
                message
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        // When
        .then(() => setMessage(""))
        .catch(console.error);
        
    }

    return (
    <form>
        <input type="text" 
        value={ message } 
        onChange={(e) => 
        setMessage(e.target.value)} 
        />
        <button type="button" onClick={()=> handleSubmit() }> Add Message </button>    
    </form>
    )
}

export default AddGoodMessage;
