
import React from 'react'
import "./Paragraph.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Paragraph = () => {
    return (
        <div>
            <div class="half-half-image-text">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 style={{ marginBottom: "2rem" }}>Why?</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="img" style={{ background: "url('https://magazine.vitality.co.uk/wp-content/uploads/2021/08/download-3.jpg')no-repeat center", backgroundSize: "cover" }}></div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="content">
                                <p style={{ color: "black" }}>The social context of a patient's health is what doctors and other healthcare professionals miss. This informational gap may lead to inadequate and ineffective treatment.In general, it is difficult to pinpoint a patient's precise social health in a way that indicates their overall health and well-being.
                                </p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="half-half-image-text">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 style={{ marginBottom: "2rem" }}>Our Mission</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="content">
                                <p style={{ color: "black" }}>our goal is to develop a thorough social scoring system that will enable each person to evaluate their score and try to improve it while keeping track of other patients.</p>

                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="img" style={{ background: "url('https://cdn.sanity.io/images/0vv8moc6/physpractice/053c8602d5fc67b56434e5cd3bdd61c085cc46aa-1000x600.png')no-repeat center", backgroundSize: "cover" }}></div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Paragraph