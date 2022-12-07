
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent";
import data from "./data.json"
import TeamName from "./Constant.js";
import SearchBar from "./SearchBar";



const HeaderComponent =()=>{
    return (
        < div className="header">
        <h1>{TeamName}</h1>
        </div>
    )
}

const CardDetail = ({ filteredMember }) =>

    
    filteredMember.map((member) => (
    <CardComponent memberDetails={member} key={member.id} />
    ));

const BodyComponent = () => {
  const [filteredMember, setFilteredMember] = useState(data);
 
  return (
    <>
      <SearchBar setFilteredMember={setFilteredMember} />
      <CardDetail filteredMember={filteredMember} />
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="Main-Container">
        <HeaderComponent />
        <BodyComponent />
      </div>
    </>
  );
};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


