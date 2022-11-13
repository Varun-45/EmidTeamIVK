import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./Leaderboard.css"
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";

const LeaderBoard = () => {
    const [entry, setentry] = useState([]);
    useEffect(() => {
        onValue(ref(db, `"user"/`), snapshot => {
            setentry([])
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((name) => {
                    if (name.name !== undefined) {
                        setentry(oldArray => [...oldArray, name])
                    }

                })
            }

        });

    }, []);

    return (
        <div className="container1">
            <div className="topLeadersList">
                {entry.map((leader, index) => (
                    <div className="leader" key={leader.id}>
                        {index + 1 <= 3 && (
                            <div className="containerImage">
                                <img className="image" loading="lazy" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                                <div className="crown">
                                    <svg
                                        id="crown1"
                                        fill="#0f74b5"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 50"
                                    >
                                        <polygon
                                            className="cls-1"
                                            points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                                        />
                                    </svg>
                                </div>
                                <div className="leaderName">{leader.name}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="playerslist">
                <div className="table">
                    <div style={{ color: "white" }}>#</div>

                    <div style={{ color: "white" }}>Name</div>



                    <div style={{ marginLeft: "10rem", color: "white" }}>
                        Age
                    </div>

                    <div style={{ marginLeft: "10rem", color: "white" }}>
                        Score
                    </div>

                </div>
                <div className="list">
                    {entry.map((leader, index) => (
                        <div className="player" key={leader.id}>
                            <span> {index + 1}</span>
                            <div className="user">
                                <img className="image" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                                <span> {leader.name} </span>
                            </div>

                            <span style={{ marginLeft: "10rem" }}> {leader.age} </span>
                            <span style={{ marginLeft: "10rem" }}> {leader.score} </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}



export default LeaderBoard