import React, { useState, useEffect } from 'react'
import "./Form.css"



const Form = () => {

    const [name, setname] = useState();
    const [Age, setage] = useState(0);
    const [Annual_Income, setai] = useState();
    const [Amount_invested_monthly, setaim] = useState();
    const [Num_Bank_Accounts, setnba] = useState();
    const [CNT_CHILDREN, setcc] = useState();
    const [CODE_GENDER, setcg] = useState();
    const [AMT_INCOME_TOTAL, setait] = useState();
    const [NAME_EDUCATION_TYPE, setnet] = useState(0);
    const [NAME_FAMILY_STATUS, setnfs] = useState();
    const [NAME_HOUSING_TYPE, setnht] = useState();
    const [housingscore, sethscore] = useState();
    const [fscore, setfscore] = useState();
    const [clk, setclk] = useState(0)
    const getScore = async (e) => {
        e.preventDefault();

        const res = await fetch('/predict_housing', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CODE_GENDER, CNT_CHILDREN, AMT_INCOME_TOTAL: Annual_Income, NAME_EDUCATION_TYPE, NAME_FAMILY_STATUS, NAME_HOUSING_TYPE

            })
        });

        const res2 = await fetch('/predict_finance', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Age: "30", Annual_Income, Monthly_Inhand_Salary: Annual_Income / 12, Amount_invested_monthly, Num_Bank_Accounts

            })
        });
        const data = await res.json();
        const data2 = await res2.json();
        if (res.status === 200 && res2.status === 200) {

            sethscore(parseInt(data * 10));

            setfscore(parseInt(data2));


        }

        else {
            window.alert("Please fill all the fields");

        }
        setclk(1);
    }




    return (
        <>

            <div class="container3">
                <header class="header">
                    <h1 id="title" class="text-center">Survey Form</h1>
                    <p id="description" class="description text-center">
                        Please fill the form and let us calculate the score for you.
                    </p>
                </header>
                <form id="survey-form" method='POST'>
                    <div class="form-group">
                        <label id="name-label" for="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            placeholder="Enter your name"
                            required
                            value={name}
                            onChange={e => setname(e.target.value)}
                        />
                    </div>

                    <div class="form-group">
                        <label id="number-label" for="number"
                        >Age<span class="clue"></span></label
                        >
                        <input
                            type="number"
                            name="age"
                            id="number"

                            class="form-control"
                            placeholder="Age"
                            value={Age}
                            onChange={e => setage(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label id="number-label" for="number"
                        >Annual income<span class="clue"></span></label
                        >
                        <input
                            type="number"
                            name="Annual_Income"
                            id="number"
                            class="form-control"
                            placeholder="Annual Income"
                            value={Annual_Income}
                            onChange={e => setai(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label id="number-label" for="number"
                        >Monthly Investments<span class="clue"></span></label
                        >
                        <input
                            type="number"
                            name="Amount_invested_monthly"
                            id="number"
                            class="form-control"
                            placeholder="Amount Invested monthly"
                            value={Amount_invested_monthly}
                            onChange={e => setaim(e.target.value)}
                        />
                    </div>

                    <div class="form-group" style={{ width: "25rem" }}>
                        <label id="number-label" for="number"
                        >Number of bank accounts<span class="clue"></span></label
                        >
                        <input
                            type="number"
                            name="  Num_Bank_Accounts"
                            id="number"
                            class="form-control"
                            placeholder="Number of bank accounts"
                            value={Num_Bank_Accounts}
                            onChange={e => setnba(e.target.value)}
                        />
                    </div>
                    <div class="form-group" style={{ width: "25rem" }}>
                        <label id="number-label" for="number"
                        >Total childrens<span class="clue"></span></label
                        >
                        <input
                            type="number"
                            name="CNT_CHILDREN"
                            id="number"
                            class="form-control"
                            placeholder="Total childrens"
                            value={CNT_CHILDREN}
                            onChange={e => setcc(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <p>Please Select your gender</p>
                        <label>
                            <input
                                name="user-recommend"
                                value="male"
                                type="radio"
                                class="input-radio"

                                onChange={e => setcg(0)}
                            />Male</label>
                        <label
                            style={{ marginLeft: "0rem" }}><input
                                name="user-recommend"
                                value="Female"
                                type="radio"
                                class="input-radio"
                                onChange={e => setcg(1)}
                            />Female</label>
                    </div>

                    <div class="form-group" style={{ width: "30rem" }}>
                        <p>
                            Select  your Education type
                        </p>
                        <select id="most-like" name="mostLike" class="form-control" required onChange={e => setnet(e.target.value)}>
                            <option disabled selected value  >Select an option</option>
                            <option value={0} >Secondary / secondary special</option>
                            <option value={1} >Higher Education</option>
                            <option value={2} >Incomplete Higher education</option>
                            <option value={3} >Lower Secondary</option>
                        </select>
                    </div>

                    <div class="form-group" style={{ width: "30rem" }}>
                        <p>
                            Select your Marital status
                        </p>
                        <select id="most-like" name="mostLike" class="form-control" required onChange={e => setnfs(e.target.value)}>
                            <option disabled selected value>Select an option</option>
                            <option value={0}>Married</option>
                            <option value={1}>Single</option>
                            <option value={2}>Civil marriage</option>
                            <option value={3}>Seperated</option>
                            <option value={4}>Widow</option>
                        </select>
                    </div>

                    <div class="form-group" style={{ width: "30rem" }}>
                        <p>
                            Select your Housing status
                        </p>
                        <select id="most-like" name="mostLike" class="form-control" required onChange={e => setnht(e.target.value)}>
                            <option disabled selected value>Select an option</option>
                            <option value={0}>House/apartments</option>
                            <option value={1}>With parents</option>
                            <option value={2}>Municipal apartments</option>
                            <option value={3}>Rented Apartments</option>
                            <option value={4}>Office Apartmen</option>
                            <option value={5}>Co-op Apartmen</option>
                        </select>
                    </div>




                    <div class="form-group">
                        <button type="submit" id="submit" class="submit-button" onClick={getScore}>
                            Submit
                        </button>
                    </div>
                </form>
                {clk && <>
                    <h3 style={{ textAlign: "center", marginTop: "1.5rem" }}>Your total social score is</h3>
                    <div className='score'>{(fscore + housingscore) / 2}</div></>
                }
            </div >

        </>

    )
}

export default Form