import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'
import React from 'react'

function AboutIconLink() {
  return (
    // to add links to the add page
    <div className='about-link'>
      <Link to={{
        pathname: '/about',
      }}>
     <FaQuestion size={30} />
     </Link>
    </div>
  )
}

export default AboutIconLink
