import React from 'react'
import { IonIcon } from '@ionic/react'
import { IoMdList } from 'react-icons/io'
type Props = {}

const DropdownMenu = (props: Props) => {
  return (
    <div className='container-fluid bg-white pt-4 pb-4'>
      <div className='dropdown'>
        <div className='category d-flex '>
          <button
            className='btn p-0 m-0 '
            type='button'
            id='dropdownMenuButton'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <div className='d-flex align-items-center'>
              <IoMdList name='list-sharp' className='pe-1'></IoMdList>
              <p className='mb-0'>Danh mục:</p>
            </div>
          </button>
          <div className='category-item-main d-flex flex-wrap'>
            <div className='category-item d-flex align-items-center ps-5'>
              <img src='https://picsum.photos/seed/picsum/50/30' alt='' className='me-2' />
              <p className='mb-0'>Category 1</p>
            </div>
            <div className='category-item d-flex align-items-center ps-5'>
              <img src='https://picsum.photos/seed/picsum/50/30' alt='' className='me-2' />
              <p className='mb-0'>Category 2</p>
            </div>
            <div className='category-item d-flex align-items-center ps-5'>
              <img src='https://picsum.photos/seed/picsum/50/30' alt='' className='me-2' />
              <p className='mb-0'>Category 3</p>
            </div>
            <div className='category-item d-flex align-items-center ps-5'>
              <img src='https://picsum.photos/seed/picsum/50/30' alt='' className='me-2' />
              <p className='mb-0'>Category 4</p>
            </div>
          </div>
          <ul
            className='dropdown-menu full-screen'
            aria-labelledby='dropdownMenuButton'
            style={{ width: '100vw', height: '100vh' }}
          >
            <li className='dropdown-item'>
              <a href='#'>Action 1</a>
            </li>
            <li className='dropdown-item'>
              <a href='#'>Action 2</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu
