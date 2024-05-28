import React from "react";
import { Link } from "react-router-dom";
import ContactComponent from "../ContactComponent/ContactComponent";

const NavComponent = (props) => {
    const    {currentPage} = props

    return (
       <nav style={{boxShadow:"2px 2px 10px yellow", letterSpacing:"-1px",display:"flex", flexDirection:"row", gap:"50px", justifyContent:"space-around", backgroundColor:"#ef5350", border:"10px dashed" ,marginBottom:"20px", padding:"20px"}}>
            {
            currentPage &&
            currentPage !== "contact"
            && <Link style={{textDecoration:"none", color:"#213547", border:"1px dashed", padding:10}} to={"/contact"}>Contact </Link>
            }
            {
            currentPage &&
            currentPage !== "home"
            && <Link style={{textDecoration:"none", color:"#213547", border:"1px dashed", padding:10}} to={"/"}>Home </Link>
            }
             {
            currentPage &&
            currentPage !== "createPokemon"
            && <Link style={{textDecoration:"none", color:"#213547", border:"1px dashed", padding:10}} to={"/createPokemon"}>Create your pokemon </Link>
            }
            {
            currentPage &&
            currentPage !== "seePokemon"
            && <Link style={{textDecoration:"none", color:"#213547", border:"1px dashed", padding:10}} to={"/allPokemon"}>See your pokemons </Link>
            }
            
            
            
       </nav>
    )
}

export default NavComponent