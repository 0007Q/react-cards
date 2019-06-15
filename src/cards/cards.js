import React,{Component} from "react"
import Card from "./cardUI.js"
import './card-style.css'

import img1 from "../assets/deep-blue.jpg"
import img2 from "../assets/husky.jpeg"


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Narla"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Mogley"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Narla Again"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards