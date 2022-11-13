import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Body from './Body';
import LeaderBoard from './LeaderBoard';
import Form from './Form';
import Pricing from './Pricing';
import Footer from './Footer';
import Paragraph from './Paragraph';
const Home = () => {
    // const [age, setage] = useState();
    // const [weight, setweight] = useState();
    // const [bmi, setbmi] = useState();
    // const [d1_lactate_max, setmax] = useState();
    // const [d1_lactate_min, setmin] = useState();
    // const [gender, setgender] = useState();
    // const [score, setscore] = useState();
    // const getScore = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch('/predict', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             age, weight, bmi, d1_lactate_max, d1_lactate_min, gender, apache_4a_hospital_death_prob: 0.57, apache_4a_icu_death_prob: 0.34

    //         })
    //     });
    //     const data = await res.json();
    //     if (res.status === 200) {
    //         window.alert("success");
    //         console.log(data)
    //         setscore(data);
    //     }

    //     else {
    //         window.alert("Please fill all the fields");

    //     }

    // }


    return (<>
        {/* <Navbar /> */}
        <Body />
        <h1 style={{ alignText: "center", color: "black", fontWeight: "900", textDecoration: "underline", marginBottom: "1rem" }}> LeaderBoard</h1>
        <LeaderBoard />
        <h1 style={{ alignText: "center", color: "black", fontWeight: "900", textDecoration: "underline", marginBottom: "1rem" }}> Buy premium to use all the best features</h1>
        <Pricing />
        <Paragraph />
        <Footer />

    </>
    )
}

export default Home