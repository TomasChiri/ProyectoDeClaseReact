import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

export const Detalle = () => {
    const [item, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res=>res.json())
            .then(json=>{
                setItems(json);
            })
    },  [id])
  return (
   
    <div className="container">
        <div className='row'>
            <div className='col-md-12'>
                <NavBar />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4 offset-md-2'>
                <img src={item.image} alt={item.title} className="image-fluid"/>
            </div>
            <div className='col-md-4'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        </div>
    </div>
  );
}

export default Detalle;