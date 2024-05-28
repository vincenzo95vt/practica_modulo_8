import React, { useEffect, useState } from "react";
import { getPokemons, addPokemonDetail } from "../../services/fetchPokemon";
import NavComponent from "../NavComponent/NavComponent";
import { useNavigate } from "react-router-dom";


const SeeAllPokemonComponent = () =>{
    const [info, setInfo] = useState([])
    const navigate = useNavigate()

    const getPokemonsFromServices = ()=>{
        const aux =  getPokemons()
        setInfo(aux)
    }

    const handlerForDetails = (newDetail) => {
        addPokemonDetail(newDetail)
        navigate("/pokemonDetail")
    }

    useEffect(() => {
        getPokemonsFromServices()
    }, [])

    return (
        <>
        <div>
            <NavComponent currentPage={"seePokemon"}/>
            <div style={{border:"10px dashed", backgroundColor:"#ef5350", paddingBottom:"20px", paddingLeft:"10px", paddingRight:"10px", boxShadow:"2px 2px 10px yellow"}}>
                <h2>List of pokemons</h2>
                {
                    !info || (info && info.length === 0)
                        ? (
                        <div style={{display:"flex", flexDirection: "column", alignItems: "start", gap:"20px"}}>
                            <span style={{color:"yellow"}}>No pokemons registered</span>
                        </div>
                        
                    )
                    : (
                        <div>
                            {
                            info.map((i, index) => (
                                    <div key={index} style={{display:"flex", flexDirection:"column", alignItems:"flex-start", paddingBottom:"10px", borderBottom:"2px dashed"}}>
                                        <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                                            <img style={{width:"150px"}} src={i.pathImg} alt="" />
                                        </div>
                                        <div style={{marginTop:"15px"}}>
                                            <span>Id:</span><span style={{color:"yellow"}}>{i.id}</span><br />
                                        </div>
                                        <div>
                                            <span>Name:</span><span style={{color:"yellow"}}>{i.name}</span><br />
                                        </div>
                                        <div>
                                            <span>Url: </span><span style={{color:"yellow"}}>{i.url}</span><br />
                                        </div>
                                        <div>
                                            <span>Height: </span><span style={{color:"yellow"}}>{i.height}</span><br />
                                        </div>
                                        <div>
                                            <span>Weight: </span><span style={{color:"yellow"}}>{i.weight}</span><br />
                                        </div>
                                        <div>
                                        <span>Type: </span><span style={{color:"yellow"}}>{i.type.join(", ")}</span><br />
                                        </div>
                                        <div style={{display:"flex", justifyContent:"center", width:"100%"}}>

                                        <button onClick={()=> handlerForDetails(i)}> See Details</button>
                                        </div>
                                    </div>
                            )
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default SeeAllPokemonComponent