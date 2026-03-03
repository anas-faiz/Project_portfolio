import { useState } from "react"
import { products } from "../data/products";

const Search = ()=>{
    
    const [searchInput,setSearchInput] = useState("");
    
    const filteredcopy = products.filter((p)=>
        //if(searchInput.trim() === "") return
        p.title.toLowerCase().includes(searchInput.toLowerCase())
    )


    return (
        <div>
            <input 
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            placeholder="search items" 
            className="border p-1 m-1" />

            {
                filteredcopy.map((i)=>(
                    <div key={i.id} >
                        {i.title}
                    </div>
                ))
            }
        
        </div>
    )
}

export default Search