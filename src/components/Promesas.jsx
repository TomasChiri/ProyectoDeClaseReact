import React from "react";

const Promesas = () => {
    const promesa = new Promise((resolve, reject) => {
        let valor = Math.round(Math.random());
        // console.log("Valor: " + valor);
        resolve(0);
    })

    promesa.then(resultado => {
        console.log("El valor de la promesa es: " + resultado);
        if(resultado === 0){
            throw new Error("Mi app me devolvio 0");
        }
    }, valor_error => {
        console.log("El error es: " + valor_error);
    }).catch(error => {
        console.log("Error: " + error);
    }).then(valor => {
        console.log("Estoy aca");
    }).finally(valor_final => {
        console.log("Fin de la ejecucion de la promesa");
    })


    return (
        <div></div>
    );
}

export default Promesas;