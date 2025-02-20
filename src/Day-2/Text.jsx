import React, { useState } from 'react'
import TextOne from './TextOne';

function Text() {
    const [clr,setclr]=useState("black")

    const color = (a) => {
        setclr(a);
    };

    return (


        <div style={{ margin: "100px 500px", width: "360px", border: "1px solid grey" }}>

            {/* <About clr={clr}></About> */}
            <TextOne clr={clr}></TextOne>

            <button style={{ color: "yellow", border: "1px solid yellow",height:"50px",width:"70px",margin:"10px",borderRadius:"5px",backgroundColor:"rgb(255,255,255)",fontSize:"15px"}} onClick={() => color("yellow")}>yellow</button>
            <button style={{ color: "blue", border: "1px solid blue",height:"50px",width:"70px",margin:"10px",borderRadius:"5px",backgroundColor:"rgb(255,255,255)",fontSize:"15px"}} onClick={() => color("blue")}>blue</button>
            <button style={{ color: "red", border: "1px solid red",height:"50px",width:"70px",margin:"10px",borderRadius:"5px",backgroundColor:"rgb(255,255,255)",fontSize:"15px"}} onClick={() => color("red")}>red</button>
            <button style={{ color: "green", border: "1px solid green",height:"50px",width:"70px",margin:"10px",borderRadius:"5px",backgroundColor:"rgb(255,255,255)",fontSize:"15px"}} onClick={() => color("green")}>green</button>
            </div>
            );
            
};

            export default Text