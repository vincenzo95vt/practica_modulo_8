import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { addPokemonDetail, getPokemonDetail } from "../../services/fetchPokemon";
import { useNavigate } from "react-router-dom";

const FormEditPokemon = () => {
    const [info, setInfo] = useState(undefined)
    const navigate = useNavigate()

    const getDetailsFromServices = () => {
        const aux = getPokemonDetail()
        console.log(aux)
        setInfo(aux)
    }

    const handlerForNewName = (e) => {
        console.log(e.target.value)
        setInfo({
            newInfo:{
                ...info.newInfo,
                "name": e.target.value
            }
        })
        console.log(info)

    }

    const handlerSubmit = () =>{
        addPokemonDetail(info.newInfo)
        navigate("/pokemonDetail")
    }

    useEffect(() => {
        getDetailsFromServices()
    }, [])

    return (
        <>
        {
            !info || (info && info === undefined)
            ? (
                <div><span>Algo ha ido mal con los detalles del pokemon</span></div>
            ) : (

                <div style={{border:"10px dashed, #ef5350", display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"black", paddingBottom:"20px", paddingLeft:"10px", paddingRight:"10px", paddingTop:"20px", boxShadow:"2px 2px 10px yellow"}}>
                        <img style={{width:"fit-content", height:"fit-content"}} src={info.newInfo.pathImg} alt="" />
                        <span style={{color:"white"}}>New Name:</span><input type="text" value={info.newInfo.name} onChange={(e) => handlerForNewName(e)}/>
                        <button onClick={handlerSubmit}>Change it!</button>
                </div>
            )
        }
        </>
    )
}

export default FormEditPokemon