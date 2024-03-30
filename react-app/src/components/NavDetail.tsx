import React from 'react'

type Props = {}

const NavDetail = (props: Props) => {
  return (
    <nav aria-label='breadcrumb' className='mt-2'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <a href='/laptop' className='text-decoration-none'>
            Laptop
          </a>
        </li>
        <li className='breadcrumb-item'>
          <a href='/laptop-dell' className='text-decoration-none'>
            Laptop Dell
          </a>
        </li>
        <li className='breadcrumb-item'>
          <a href='/laptop-dell-xps' className='text-decoration-none'>
            Laptop Dell XPS
          </a>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          Dell XPS 13
        </li>
      </ol>
    </nav>
  )
}

export default NavDetail
