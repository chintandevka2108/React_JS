import React, { useEffect, useState } from 'react';

const Form = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [allData, setALLData] = useState([]);

  const saveData = () => {
    let obj = {
      Name,
      Age,
      Email,
      Password,
      ConfirmPassword
    };

    setALLData([...allData, obj]);

    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {}, []);

  return (
    <div className="form-container">
      <h1 className="form-title">User Information Form</h1>
      <input type="text" className='form-input' placeholder='Enter Your Name' value={Name} onChange={(e) => setName(e.target.value)} />
      <input type="number" className='form-input' placeholder='Enter Your Age' value={Age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" className='form-input' placeholder='Enter Your Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className='form-input' placeholder='Enter Your Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" className='form-input' placeholder='Confirm Your Password' value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button className='form-button' onClick={saveData}>Submit</button>

      <div className='data-display'>
        {allData.map((el, i) => (
          <div key={i} className='data-item'>
            <p>{i + 1}. Name: {el.Name}</p>
            <p>Age: {el.Age}</p>
            <p>Email: {el.Email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
