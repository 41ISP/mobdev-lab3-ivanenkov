import { useState } from "react"
import Input from "../../components/Input/Input"


const SearchPage = () =>{
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="search-page">
            <Input value={searchQuery} setValue={setSearchQuery}/>
        </div>
    )
}

export default SearchPage