import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './loading.scss'

const Loading = () => (
<div className="loading">
  <FontAwesomeIcon class="loading__icon" size='2x' icon={faSpinner} />
</div>
);



export default Loading;