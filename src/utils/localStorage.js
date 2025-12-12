export const loadinstallation= () =>{
    try{
         const data = localStorage.getItem('installation')
         return data? JSON.parse(data):[]
    }
    catch(err)
    {
        console.log(err)
        return[]
    }
}
export const updateList = (product) =>{
 
    const installation = loadinstallation()

    try{
        const isDuplicate = installation.some(p=> p.id=== product.isDuplicate)
        if(isDuplicate) return alert('Already added in installation')
            const updatedInstalltion = [...installation, product]
        localStorage.setItem('installation', JSON.stringify(updatedInstalltion))
    }
}

export const removeFrominstallation = id=>
{
    const installation = loadinstallation()

    try {
        const updatedInstalltion = installation.filter(p=>p.id !==id)
        localStorage.setItem('installation', JSON.stringify)
    }
     catch(err)
    {
        console.log(err)
        
    }
}