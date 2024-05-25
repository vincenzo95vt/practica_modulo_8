import React from "react";
import { Route, Link, Routes } from "react-router-dom";

const MenuComponent = () => {

    return (
        <>
            <div style={{display:"flex", gap:"5px"}}>
                <Link to={'/createPokemon'}>Create your pokemon</Link>
                <Link to={'/allPokemon'}>List all pokemon</Link>
            </div>
        </>
    )
}

export default MenuComponent