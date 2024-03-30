import React from 'react'
import { Link } from 'react-router-dom'
import Navitem from '~/components/Navitem'
import Navbaradmin from '~/components/navbar_admin'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
      <Navbaradmin />
      <div className='d-flex'>
        <Navitem/>
        <div className='container' style={{ width: 'calc(100% - 250px)' }}>
          <h1 className='h2 mt-3'>Dashboard</h1>
          <hr></hr>
          <h4>Wellcome To Technology Exhibition Admin!</h4>
        </div>
      </div>
    </>
  )
}

export default Dashboard
