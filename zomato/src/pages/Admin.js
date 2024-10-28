import React from 'react'
import './Admin.css'   
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
        <Link to='/vdate' className='lin'><button type="button" class="btn btn-primary btn-lg big st">Veg</button></Link>
        <Link to='/ndate'className='lin'><button type="button" class="btn btn-danger btn-lg big st">Nonveg</button></Link>
    </div>
  )
}

export default Admin  