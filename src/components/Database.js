import React, { useState, useEffect } from 'react'
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";

const Database = () => {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [score, setscore] = useState("");
    const [msg, setmsg] = useState("");

    const writeToDatabase = () => {
        if (name == "" || age === "" || score === "") {
            setmsg({
                error: true,
                msg: "Kindly fill  all the fields"
            });

        }
        else {

            const uuid = uid();
            set(ref(db, `"user"/${uuid}`), {
                name,
                age,
                score

            });
            setname("");
            setage("");
            setscore("");
            setmsg({
                error: false,
                msg: "Thanks,our team will reach to you shortly"
            });
            window.alert("ss")

        }

    }

    return (
        <>
            <div class="input-box">
                <input type="text" placeholder="Enter your name" onChange={(e) => setname(e.target.value)} value={name} />
            </div>
            <div class="input-box">
                <input type="text" placeholder="age" onChange={(e) => setage(e.target.value)} value={age} />
            </div>
            <div class="input-box message-box">
                <textarea placeholder="score" onChange={(e) => setscore(e.target.value)} value={score}></textarea>
            </div>
            <div class="button">
                <input type="button" value="Send Now" onClick={writeToDatabase} />
            </div>
        </>

    )
}

export default Database