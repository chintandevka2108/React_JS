import React, { useState } from 'react'
import About from './About';

function Home() {
  const [count, setcount] = useState(0)

  const increment = () => {
    setcount(count + 1);
  };

  const dec = () => {
    setcount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "100px", border:"1px solid black",backgroundColor:"black",height:"100vh"}}>
      <About cou={count}></About>
      <button style={{ width: "40px", height: "40px", fontSize: "25px", border: "none", backgroundColor: "green", color: "white", borderRadius: "10px", margin: "5px" }}
        onClick={() => {
          increment();

        }}
      >
        +
      </button>
      <button style={{ width: "40px", height: "40px", fontSize: "25px", border: "none", backgroundColor: "red", color: "white", borderRadius: "10px", margin: "5px" }}
        onClick={() => {
          dec();
        }}
      >
        -
      </button>
    </div>
  );
}

export default Home