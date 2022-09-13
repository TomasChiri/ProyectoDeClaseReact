import React from 'react'
import Abstraccion1 from './Abstraccion1';

const inputCount = ({onConfirm, maxQuantity}) => {};
const buttonCount = ({onConfirm, maxQuantity}) => {};

export const ItemDetail = ({item, inputType="input"}) => {
    const Count = inputType == "button" ? buttonCount : inputCount;
    const itemMax = item.max;
    const itemMin = item.min;

    function addToCart(quantity){
        if(item.inStock){
            console.log(`Agregaste el Producto: ${item.id} con la cantidad de ${quantity}`);
        }
    }
  return (
    <div>
        <label>Descripcion del Item</label>
        {/* <Count onConfirm={addToCart} maxQuantity={item.max}></Count> */}
        <Abstraccion1 />
    </div>
  );
}

export default ItemDetail;
