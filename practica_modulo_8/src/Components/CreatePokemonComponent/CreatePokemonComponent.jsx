import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPokemons } from "../../services/fetchPokemon";
import NavComponent from "../NavComponent/NavComponent";

const CreatePokemonComponent = () => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    
    const handlerForPokemon = (e) =>{
        const {name, value} = e.target;
        setPokemon((otherInputs) =>({
            ...otherInputs,
            [name]: name === "type" ? value.split(","):value
        }))
    }

    const handleSubmit = () => {
        addPokemons(pokemon)
        navigate("/") 

    }

    return (
        <>
            <NavComponent currentPage={"createPokemon"}/>
            <div style={{boxShadow:"2px 2px 10px yellow",backgroundColor:"#ef5350", display: "flex", flexDirection: "column", alignContent:"center", border:"10px dashed", padding:"10px"}}>
                <h2 style={{color:"#003A70"}}>Create your Pokemon!</h2>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Id</span>
                    <input style={{fontFamily:"Press Start 2P", color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="id" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Name</span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text"  name="name" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>URL</span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text"  name="url" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Weight</span>
                    <input style={{fontFamily:"Press Start 2P", color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="weight" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Height</span>
                    <input style={{fontFamily:"Press Start 2P",color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="height" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between", marginBottom:"15px"}}>
                    <span style={{color:"yellow"}}>Type</span>
                    <input style={{fontFamily:"Press Start 2P",color:"yellow",outline:"none", backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="type" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <button style={{width:"fit-content", backgroundColor:"yellow", color:"#003A70"}} onClick={handleSubmit}>Registrar pokemon</button>    
                </div>
            </div>
        </>
    )
}

export default CreatePokemonComponent