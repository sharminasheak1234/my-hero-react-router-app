import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProduct = () => {
    
     const[products, setProducts]=useState([])
     const[loading, setLoading]=useState(true)
     const[error, setError]=useState(null)
     useEffect(() =>{
        axios('../App.json')
        .then(data=>setProducts(data.data))
        .catch(err=>setError(setError))
     },[])

     return{products, loading, error}
};

export default useProduct;