import React from "react"
import { useState,useEffect } from "react"
import {useLoaderData} from "react-router-dom"

function Github(){

    //const [data,setData] = useState({});
    const data  = useLoaderData();

    // useEffect(() => {
    //     console.log("Hello");
    
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => { 
    //             setData(data)
    //             console.log(data)
    //         }
    //             )
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);
    


    return(
        <div>Github : {data.followers}
        <img src = {data.avatar_url} width= {300} />
        </div>
    )
}

export default Github

export const githubDataLoader = async () => {
     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
     return response.json();
 
}