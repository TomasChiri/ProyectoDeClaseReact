import React from "react";

const Descripcion = ({tipo}) => <p>{tipo}, es un framework de JS...</p>

const Header = (props) => {
    return(
        <div className="row">
            <div className="col-md-12 bg-light text-black p-3">
                <h1>{props.curso} {props.tipo}</h1>
                <Descripcion tipo={props.tipo}/>
            </div>
        </div>
    );
}

export default Header;