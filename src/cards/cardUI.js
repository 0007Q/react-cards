import React from "react"
import img1 from "../assets/deep-blue.jpg"
import './card-style.css'

const Card = props => {
return(
    <div className="card text-center">
        <div className="overflow">
            <img src={img1} alt="image 1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
            Lorem some text here
        </p>
        <a href="#" className="btn btn-outline-success">Press Me</a>
        </div>
    </div>
)
}

export default Card