import React, { useEffect } from 'react';
import { useState } from 'react';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';

import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Installation =() => {

    const[installation,setInstallation] = useState([])
    
    const[sortOrder, setSortOrder] = useState('none')
    
    useEffect(()=> 
    {
        const saveinst =JSON.parse(localStorage.getItem('installation'))
        if(saveinst) setInstallation(saveinst)
    },[])

    const sortedItem =(()=>{
      if(sortOrder==='downloads-asc')
      
        {
          return[...installation].sort((a,b)=>a.downloads-b.downloads)
        }
        else if(sortOrder==='downloads-desc'){
          return[...installation].sort((a,b)=>b.downloads-a.downloads)
        }
        else {
          return installation
        }
    })()
{/* chart data */}
const totalbyCount ={}
installation.forEach(product => {
  const count =product.count
  totalbyCount[count]
});
    return (
        <div className=' space-y-6'>
          
            <h1>installation:{sortedItem.length}</h1>

            <div>
                <h1 className=' font-bold text-3xl'>
                    Your Installed Apps
                </h1>
                <p className=' text-[#627382]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
                </div>
                <div className=' flex justify-between'>
                    
                    <h3 className='font-bold text-2xl '><span>({installation.length})</span> {''}Apps Found</h3>
                    
                       <label className=' form-control w-full max-w-xs'>
                         <select  className=' border-2 ' value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
                     <option value="none">Sort By Size </option>
                        <option value="downloads-asc"> High-&gt;Low</option>    
                          <option value='downloads-desc'>Low-&gt;High</option>  
                        </select>
                       </label>

                   
                </div>

                {/*---card----*/}

         <div className='space-y-3'>
  {sortedItem.map(p => (
    <div className="card bg-base-100 flex flex-row w-full p-4">

      <div className="mr-4">
        <img
          src=""
          alt="Product Image"
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>

      <div>
        <h2 className="card-title text-xl mb-2">Card Title</h2>

        <div className="flex gap-8 mt-2">

          <div className='text-center'>
            <img src={download} className="w-5 h-5 mx-auto" />
            <h2 className='text-lg font-bold mt-1'>12.5K</h2>
          </div>

          <div className='text-center'>
            <img src={rating} className="w-5 h-5 mx-auto" />
            <h2 className='text-lg font-bold mt-1'>4.7</h2>
          </div>

          <div className='text-center'>
            <img src={review} className="w-5 h-5 mx-auto" />
            <h2 className='text-lg font-bold mt-1'>8.1K</h2>
          </div>

        </div>
      </div>

      <div className="ml-auto">
        <button className="btn btn-primary">Uninstall</button>
      </div>
 
    </div>
 ))}
</div>

{/* chart*/}
<div className='space-y-5'>
<h3 className=' text-xl font-bold'>Ratings</h3>
<div className='bg-base-200 border rounded-xl p-4 h-120 pl-10 pt-7'>
     < ResponsiveContainer>
        < ComposedChart
          width={500}
          height={400}
          data={installation}
          
        >
          <CartesianGrid stroke="#f5f5f5" />
          < XAxis dataKey="name" scale="band" />
          < YAxis />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          
        </ComposedChart>
      </ResponsiveContainer>
</div>
</div>
</div>
     
     
    
    );
   
  
};

export default Installation;