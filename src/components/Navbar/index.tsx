import React from 'react'
import { FaCode, FaEnvelope, FaHome} from 'react-icons/fa'
import './styles.scss'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
    <ul>
      <li><Link href='/'><FaHome className='icon' /></Link></li>
      <li><Link href='/projects'><FaCode className='icon' /></Link></li>
      <li><Link href='/contact'><FaEnvelope className='icon' /></Link></li>
    </ul>
  </nav>
  )
}

export default Navbar