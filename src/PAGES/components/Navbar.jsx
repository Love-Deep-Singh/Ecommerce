import React from 'react'


function Navbar() {
  return (
    <nav>
      <ul className='flex navbar'>
      <div>
      <li className='links' > <a href="">Shop</a> </li>
      <li className='links' > <a href="">Contact</a> </li>
      </div>
      <div>
      <li className='links' > <a href="">Sign in</a> </li>
      <li className='links' > <a href="">Cart</a> </li>
      </div>
      </ul>
     </nav>
  )
}

export default Navbar