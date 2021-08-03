import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Character = ( ) => {

    let {id} = useParams();


    useEffect(() => {
        fetch(`api/personaje/${id}`)
        .then()
        .catch()

        
    }, [])

}

export default Character;