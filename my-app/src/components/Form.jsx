import React from 'react'

function Form() {
  return (
    <div className='All'> 
    <p>Dada Redux NotePad</p>
    <br />
    <input placeholder='Note Title' type="text" />
   
    <div className='t_area'>
      <br />
    <textarea name="Miki" id="" cols="25" rows="5"></textarea>
    </div>
    <br />
    <div className="ovals">
      <div className="red"></div>
      <div className="purple"></div>
      <div className="blue"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <button>Save</button>
    </div>
    <br />
    <input placeholder='Write to search' type="text" />
    </div>
  )
}

export default Form