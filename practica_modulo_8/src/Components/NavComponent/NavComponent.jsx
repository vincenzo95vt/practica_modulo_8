import React from "react";
import { Link } from "react-router-dom";
import ContactComponent from "../ContactComponent/ContactComponent";

const NavComponent = (props) => {
    const    {currentPage} = props

    return (
       <nav style={{boxShadow:"2px 2px 10px yellow", display:"flex", flexDirection:"row", gap:"20px", justifyContent:"space-around", backgroundColor:"#ef5350", border:"10px dashed" ,marginBottom:"20px", padding:"20px"}}>
            {
            currentPage &&
            currentPage !== "contact"
            && <Link style={{textDecoration:"none", color:"#213547"}} to={"/contact"}>Contact</Link>
            }
            {
            currentPage &&
            currentPage !== "home"
            && <Link style={{textDecoration:"none", color:"#213547"}} to={"/"}>Home</Link>
            }
             {
            currentPage &&
            currentPage !== "createPokemon"
            && <Link style={{textDecoration:"none", color:"#213547"}} to={"/createPokemon"}>Create your pokemon</Link>
            }
            {
            currentPage &&
            currentPage !== "seePokemon"
            && <Link style={{textDecoration:"none", color:"#213547"}} to={"/allPokemon"}>See your pokemons</Link>
            }
            
            
       </nav>
    )
}

export default NavComponent