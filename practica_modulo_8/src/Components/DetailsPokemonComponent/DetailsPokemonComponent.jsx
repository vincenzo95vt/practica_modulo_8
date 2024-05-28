import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavComponent from "../NavComponent/NavComponent";
import { addPokemonDetail, getPokemonDetail, removePokemonFromArray } from "../../services/fetchPokemon";
import { useNavigate } from "react-router-dom";

const DetailsPokemonComponent = () => {
    const [detail, setDetail] = useState(undefined)
    const navigate = useNavigate()

    const getDetailsFromServices = () => {
        const aux =  getPokemonDetail()
        console.log(aux)
        setDetail(aux)
    }
    const handlerForNewName = () => {
        navigate("/editPokemon")
    }

    const handlerToRemovePokemon = (value) => {
        removePokemonFromArray(value)
        navigate("/allPokemon")
    }

    useEffect(() => {
     getDetailsFromServices()
    }, [])

    return(
        <>
            <NavComponent currentPage ="pokemonDetails"/>
            <div style={{border:"10px dashed, #ef5350", backgroundColor:"black", paddingBottom:"20px", paddingLeft:"10px", paddingRight:"10px", boxShadow:"2px 2px 10px yellow"}}>
                <h2 style={{fontSize:"2em", color:"white"}}>Pokemon details</h2>
                {
                    !detail || (detail && detail === undefined)
                    ? (
                        <div style={{display:"flex", flexDirection: "column", alignItems: "start", gap:"20px"}}>
                            <span>No details for the pokemon selected</span>
                        </div>
                    ) : (
                        <>
                            <div style={{display:"flex", flexDirection: "column", alignItems: "center", gap:"20px", marginBottom:"10px"}}>
                                <div><span style={{fontSize:"25px", color:"white"}}>{detail.newInfo.name}</span></div>
                                <div><img style={{height:"400px", width:"fit-content", backgroundImage:"white"}} src={detail.newInfo.pathImg} alt=""/></div>
                                <div><span style={{color:"white"}}>Id:</span><span style={{color:"yellow"}}>{detail.newInfo.id}</span></div>
                                <div><span style={{color:"white"}}>Weight:</span><span style={{color:"yellow"}}>{detail.newInfo.weight}</span></div>
                                <div><span style={{color:"white"}}>Height:</span><span style={{color:"yellow"}}>{detail.newInfo.height}</span></div>
                                <div><span style={{color:"white"}}>Type:</span><span style={{color:"yellow"}}>{detail.newInfo.type}</span></div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-around"}}>
                                <button style={{backgroundColor:"yellow", border:"1px solid"}} onClick={handlerForNewName}>Edit Pokemon</button>
                                <button style={{backgroundColor:"yellow", border:"1px solid"}} onClick={() => handlerToRemovePokemon(detail.newInfo)}> Remove Pokemon</button>
                            </div>
                        
                        </>
                        
                        
                    )
                }
            </div>
        </>
    )


}

export default DetailsPokemonComponent