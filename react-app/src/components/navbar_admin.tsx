import React from 'react'

const Navbaradmin = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark shadow'>
        <div className='container-fluid'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                <div className='d-flex align-items-center justify-content-between'>
                  {/* <img src="/img/Technobition.png" alt="" style="height: 50px; margin-right: 10px;">
                        <h3>Technology Exhibition</h3> */}
                </div>
              </a>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item d-flex'>
              {/* <img src="/img/Technobition.png" alt="" className="rounded-pill" style={{width: "40px", height:" 40px"}}> */}
              <a className='nav-link active' href='#'>
                Xin Chào "Admin"
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbaradmin
