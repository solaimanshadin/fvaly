import {
  cilPuzzle,
  cilSpeedometer
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    
  },
 
  {
    component: CNavGroup,
    name: 'User Management',
    to: '/dashboard/users',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        to: '/dashboard/users',
      },
      {
        component: CNavItem,
        name: 'Merchants',
        to: '/dashboard/merchant',
      },
    ],
  },
  
]

export default _nav
