import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPokemons } from "../../services/fetchPokemon";
import NavComponent from "../NavComponent/NavComponent";

const CreatePokemonComponent = () => {
    const [pokemon, setPokemon] = useState({})
    const [errorsForHTML, setErrors] = useState(undefined)
    const navigate = useNavigate()
    
    const handlerForPokemon = (e) =>{
        const {name, value} = e.target;
        setPokemon({
            ...pokemon,
            [name]: name === "type" ? value.split(","):value
        })
    }

    const checkErrors = () => {
        const errors = []
        console.log(pokemon)
        if(!pokemon.name || pokemon.name === "" ){
            errors.push({
                name:"name",
                type: "text",
                description:"Please provide a name for the Pokemon"
            })
        }
        if( !pokemon.id || pokemon.id === ""){
            errors.push({
                name:"id",
                type: "text",
                description:"Please provide a id for the Pokemon"
            })
        }if(!pokemon.height || pokemon.height === ""){
            errors.push({
                name:"height",
                type: "text",
                description:"Please provide a height for the Pokemon"
            })
        }if(!pokemon.weight || pokemon.weight === ""){
            errors.push({
                name:"weight",
                type: "text",
                description:"Please provide a weight for the Pokemon"
            })
        }if(!pokemon.url || pokemon.url === ""){
            errors.push({
                name:"url",
                type: "text",
                description:"Please provide a valid url for the Pokemon"
            })
        }if( !pokemon.pathImg || pokemon.pathImg === ""){
            errors.push({
                name:"pathImg",
                type: "text",
                description:"Please provide a valid image for the Pokemon"
            })
        }
        if(!pokemon.type || pokemon.type === ""){
            errors.push({
                name:"type",
                type: "text",
                description:"Please provide a valid image for the Pokemon"
            })
        }
        console.log(errors)
        return errors.length > 0 ? errors : undefined
    }

    const handleSubmit = () => {
        const errors = checkErrors()
        console.log(errors)
        if(errors){
            setErrors(errors)
        }else{
            addPokemons(pokemon)
            navigate("/") 
        }
    }

    return (
        <>
            <NavComponent currentPage={"createPokemon"}/>
            <div style={{boxShadow:"2px 2px 10px yellow",backgroundColor:"#ef5350", display: "flex", flexDirection: "column", alignContent:"center", border:"10px dashed", padding:"10px"}}>
                <h2 style={{color:"#003A70"}}>Create your Pokemon!</h2>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Id</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'id') && errorsForHTML.find(e => e.name == 'id').description }
                        </span>
                    <input style={{fontFamily:"Press Start 2P", color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="id" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Name</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'name') && errorsForHTML.find(e => e.name == 'name').description}
                        </span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text"  name="name" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>URL</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'url') && errorsForHTML.find(e => e.name == 'url').description}
                        </span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text"  name="url" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Weight</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'weight') && errorsForHTML.find(e => e.name == 'weight').description}
                    </span>
                    <input style={{fontFamily:"Press Start 2P", color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="weight" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>ImgPath</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'pathImg') && errorsForHTML.find(e => e.name == 'pathImg').description}
                    </span>
                    <input style={{fontFamily:"Press Start 2P", color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} name="pathImg" type="text" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Height</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'height') && errorsForHTML.find(e => e.name == 'height').description}
                    </span>
                    <input style={{fontFamily:"Press Start 2P",color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="height" onChange={(e) => handlerForPokemon(e)}/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between", marginBottom:"15px"}}>
                    <span style={{color:"yellow"}}>Type</span>
                    <span style={{color: 'black', fontSize:"0.8em"}}>
                        {errorsForHTML && errorsForHTML.find(e => e.name == 'type') && errorsForHTML.find(e => e.name == 'type').description}
                    </span>
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