import React from "react";

const Header = () => {
    let estilo = {
        color: "white",
        backgroundColor: "pink",
        paddingTop: "20px",
        paddingBottom:"20px"
    };


    return(
        <div style={estilo}>
            <p>Encabezado!</p>
            <hr />
        </div>
    );
}

export default Header;