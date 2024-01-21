import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ProfilePage = () => {

  const [userData, setUserData] = useState([])
  const [id, setId] = useState(localStorage.getItem('userID'))

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:2804/api/users/${id}`).then(res => {
        console.log(res.data)
        setUserData(res.data)
      })
    }
  }, [id])


  return (
    <>
      <div className='profilePage' style={{ display: 'flex', marginLeft: '35px' }}>
        <div style={{ margin: '40px', padding: '20px', backgroundColor: '#F5F5F6', borderRadius: '8px', width: '650px', height: '550px' }}>
          <div style={{ display: 'flex', marginLeft: '20px' }}>
            <h2>{userData.name}</h2>
            <h2 style={{marginLeft: '10px'}}>{userData.surname}</h2>
          </div>
          <div style={{marginLeft: '20px'}}>
            <h4>{userData.userType}</h4>
          </div>
          <div style={{ margin: '40px', padding: '20px', backgroundColor: '#976B7A', borderRadius: '8px', width: '500px', height: '300px', marginLeft: '20px'}}>
          <div style={{display: 'flex'}}>
            <h5 style={{color: 'white'}}>Username:</h5>
            <p style={{marginLeft: '10px', color: 'white'}}>{userData.username}</p>
          </div>
          <div style={{display: 'flex'}}>
            <h5 style={{color: 'white'}}>Email:</h5>
            <p style={{marginLeft: '10px', color: 'white'}}>{userData.email}</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage