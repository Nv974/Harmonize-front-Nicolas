import React from 'react';


const Field = ({name,value,onChange,type,placeholder}) =>{
const handleChange= (evt) =>{
    onChange(evt.target.value,name)
}    
return(
<div className="field">
    <input placeholder={placeholder} 
            type={type} 
            name={name} 
            value={value} 
            onChange={handleChange}/>
</div>
);}
export default Field;