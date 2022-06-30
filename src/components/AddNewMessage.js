import { ReactDOM } from "react";
import { useState } from "react";
import '../../src/style.css'


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
        // Empty string is 
        .then(() => setMessage(""))
        .catch(console.error);
        
    }

    return (
    <form>
        <input className="message" type="text"
        value={ message } 
        placeholder="Good message here"
        onChange={(e) => 
        setMessage(e.target.value)} 
        />
        <button className="button1" type="button" onClick={()=> handleSubmit() }> Add Message </button>    
    </form>
    )
}

export default AddGoodMessage;
