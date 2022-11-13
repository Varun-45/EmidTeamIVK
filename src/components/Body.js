import React from 'react'
import "./Body.css"
import img1 from "../images/img1.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Body = () => {
    return (
        <div>
            <section class="headline">
                <div className='headline-text'> Check your Social score now</div>
                <div>
                    <a href="/form" class="button1" rel="noopener" style={{ textDecoration: "none" }}>Check Now</a></div>
            </section>






        </div>
    )
}

export default Body