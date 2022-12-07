import { useState } from "react";
import data from "./data.json";

const SearchMember = (SearchText) => {
  return data.filter(
    (mem) =>
      mem.name.toLocaleLowerCase().includes(SearchText.toLocaleLowerCase()) ||
      mem.Company.toLocaleLowerCase().includes(SearchText.toLocaleLowerCase())
  );
};

const SearchBar=({setFilteredMember})=>{
const[SearchText,SetText]=useState();

const SearchName=(e)=>{
    SetText(e.target.value);
}
    return(
        <div>
        <form onSubmit={(e)=>{
            e.preventDefault(); 
            const filteredMember=SearchMember(SearchText);
            setFilteredMember(filteredMember)
            
            }}>
            <div className="SearchBar">
                <input id="memberSearch" placeholder="Search by Name or College/Company" value={SearchText} onChange={SearchName}/>
                <button className="Button-Search">Search</button>
             
            </div>
        </form>
      </div> 
    )
}

export default SearchBar;