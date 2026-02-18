import React from 'react'

const Card = (props) => {
    return (

        <div className="box">
            <div className="top">
                <div>
                    <img src="ddw" alt="img" />
                </div>
                <button>Save</button>
            </div>
            <div className="center">
                <p>{props.company}</p>
                <p>{props.skill}</p>
                <div>
                    <button>Part Time</button>
                    <button>Full Time</button>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <p>120$/hr</p>
                    <p>{props.address}</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card