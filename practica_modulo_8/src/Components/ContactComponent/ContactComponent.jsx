import React from "react";
import NavComponent from "../NavComponent/NavComponent";
const ContactComponent = () => {

    return (
        <>
            <NavComponent currentPage = {"contact"}/>
            <div style={{boxShadow:"2px 2px 10px yellow", backgroundColor:"#ef5350", paddingTop:"5px", border:"10px dashed"}}>
                <h2>Contact</h2>
                <div style={{display:"flex", flexDirection:"column", alignItems:"start", padding:"20px"}}>
                    <div style={{display:"flex"}}><span>Name: </span><span style={{color:"yellow"}}>Pablo Vincenzo</span></div>
                    <div style={{display:"flex"}}><span>Last Name: </span><span  style={{color:"yellow"}}>Vasta Triviño</span></div>
                    <div style={{display:"flex"}}><span> My github profile:</span><a style={{textDecoration:"none"}} href="https://github.com/vincenzo95vt">Click here!</a></div>
                    <div style={{display:"flex"}}><span>City:</span><span  style={{color:"yellow"}}> Malaga</span></div>
                </div>
            </div>
        </>
    )
}

export default ContactComponent