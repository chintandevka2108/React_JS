import React, { useEffect, useState } from 'react'

function Api() {
    const [data,setdata]=useState([])

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setdata(json));
    }, []);
  
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          marginLeft: "25px",
          marginTop: "25px",
        }}
      >
        {data.map((e, i) => {
          return (
            <div
              style={{
                height: "250px",
                width: "250px",
                boxShadow: "2px 2px 2px 2px grey",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ height: "250px", width: "250px" }}
                src={e.image}
                alt=""
              />
              {/* <button style={{width:"250px",height:"40px",border:"none"}}>55</button> */}
            </div>
          );
        })}
      </div>
    );
}

export default Api