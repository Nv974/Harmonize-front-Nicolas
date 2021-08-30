import React from 'react';
import PropTypes from 'prop-types';

// import './field.scss'

const Field = ({name,value,onChange,type,labelText}) =>{
const handleChange= (evt) =>{
    onChange(evt.target.value,name)
}    
return(
<div className={"new__project__form__field field__"+name}>
    <label htmlFor={name}>{labelText}</label>
    <input  type={type} 
            name={name} 
            value={value} 
            onChange={handleChange}/>
</div>
);}

Field.propTypes = {
    name:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
}

export default Field;