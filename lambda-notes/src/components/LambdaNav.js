import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const LambdaNav = (props) =>{



return (

<div className="container">
<nav>
  <div className='cover'>
<h1>Lambda Notes</h1>
  </div>


  <Link to='/'>
  <button>View Your NOTES</button>
  </Link>
  <Link to='/CreateNote'>
    <button>+ Create New Note</button>
  </Link>

</nav>

</div>
);



}
export default LambdaNav
