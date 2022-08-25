import React, { Component } from "react";
import Prefooter from "./Prefooter";

class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 bg-black text-white p-3">                
                    <Prefooter ubicacion={this.props.ubicacion} anio={this.props.anio}/>
                </div>
            </div>
        )
    }
}

export default Footer;