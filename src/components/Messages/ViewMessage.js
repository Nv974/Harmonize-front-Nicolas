import React from 'react';

import './viewmessage.scss'

const ViewMessage = ({message, title}) => (
<div className="viewmessage">
        <div className="viewmessage__title"> Objet : {title} </div>
        <div className="viewmessage__message"> {message}  </div>  
</div>
);
export default ViewMessage;