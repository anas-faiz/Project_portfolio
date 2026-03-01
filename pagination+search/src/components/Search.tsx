import { useState } from "react"

const Search = ()=>{
    
    const [searchInput,setSearchInput] = useState("");
    

    return (
        <div>
            <input placeholder="search items" className="border p-1 m-1" />
        </div>
    )
}

export default Search