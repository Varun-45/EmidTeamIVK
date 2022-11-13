import React from 'react'

const Pricing = () => {
    return (
        <div class="price-table-wrapper">
            <div class="pricing-table">
                <h2 class="pricing-table__header">- BASIC -</h2>
                <h3 class="pricing-table__price">Rs.50</h3>
                <a target="_blank" class="pricing-table__button" href="#">
                    Join Now!
                </a>
                <ul class="pricing-table__list">
                    <li>30 day free trial</li>
                    <li>Accurate Scoring</li>
                    <li>20% discount</li>


                </ul>
            </div>

            <div class="pricing-table">
                <h2 class="pricing-table__header">- PREMIUM -</h2>
                <h3 class="pricing-table__price">Rs.130</h3>
                <a target="_blank" class="pricing-table__button" href="#">
                    Join Now!
                </a>
                <ul class="pricing-table__list">
                    <li>50 day free trial</li>
                    <li>Accurate Scoring</li>
                    <li>20% discount</li>
                    <li>Access to leaderboard</li>

                </ul>
            </div>
        </div>
    )
}

export default Pricing