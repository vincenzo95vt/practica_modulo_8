import React from "react";

const CreatePokemonComponent = () => {

    return (
        <>
            <div style={{boxShadow:"1px 2px 5px",backgroundColor:"#ef5350", display: "flex", flexDirection: "column", alignContent:"center", border:"2px solid", padding:"10px"}}>
                <h2 style={{color:"yellow"}}>Create your Pokemon!</h2>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Id</span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="id"/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Nombre</span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text"  name="name" />
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Peso</span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="weight"/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <span style={{color:"yellow"}}>Altura</span>
                    <input style={{color:"yellow",outline:"none",backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="height"/>
                </div>
                <div style={{display:"flex", justifyContent: "space-between", marginBottom:"15px"}}>
                    <span style={{color:"yellow"}}>Tipo</span>
                    <input style={{color:"yellow",outline:"none", backgroundColor:"transparent", border:"none", borderBottom: " 1px solid #ccc"}} type="text" name="type"/>
                </div>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <button style={{width:"fit-content"}}>Registrar pokemon</button>    
                </div>
            </div>
        </>
    )
}

export default CreatePokemonComponent