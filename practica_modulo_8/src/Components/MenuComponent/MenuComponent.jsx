import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import NavComponent from "../NavComponent/NavComponent";

const MenuComponent = () => {

    return (
        <>
            <div className="containerHome" style={{display:"flex", flexDirection:"column", boxShadow:"1px 2px 5px", display:"flex", gap:"5px", backgroundColor:"#ef5350", paddingBottom:"30px", paddingLeft:"10px", paddingRight:"10px",border:"10px dashed", boxShadow:"2px 2px 10px yellow"}}>
                <h2 style={{}}>Home</h2>
                <div className="containerLinks" style={{display:"flex", flexDirection:"row", gap:"35px", justifyContent:"space-around"}}>
                    <Link className="link" style={{color:"yellow"}} to={'/createPokemon'}>Create your pokemon</Link>
                    <Link className="link" style={{color:"yellow"}} to={'/allPokemon'}>See all pokemon</Link>
                </div>
            </div>
        </>
    )
}

export default MenuComponent