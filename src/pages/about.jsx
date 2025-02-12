import { useState } from 'react';
import './about.css'


function About(){
    const [showEmail, setShowEmail] = useState(false);

    function showInfo(){
        setShowEmail(!showEmail);
    }

    return(
        <div className="about page">
            <h1>About us!</h1>
                <br />
            <h3>Nick Greenfield</h3>

            {showEmail
             ? <h5>nagreenfield@yahoo.com</h5> : null}
           
            <button onClick={showInfo} className='btn btn-sm btn-outline-success'>
                {
                    showEmail
                        ? "Hide my email"
                        : "Show my email"
                }
            </button>
        </div>
    )
}

export default About;