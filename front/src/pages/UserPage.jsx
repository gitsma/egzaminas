import React from 'react'
import AdForm from '../components/AdForm'
import AdCard from '../components/AdCard'
import styles from '../pages/UserPage.css'
import AllAds from '../components/AllAds'
import { Button } from 'react-bootstrap'
import userService from '../services/userService'
import { useNavigate } from 'react-router-dom'


const UserPage = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  const navigate = useNavigate()

  const userlogout = async (e) => {
    e.preventDefault()

    userService.logout()

    console.log('user logged out')
    navigate("/");

  }
  

  return (
    <div className='userpagebody'>
      <h2 className="heading">{`Hello, ${user.name}!`}</h2>
          <div className="form_buttons">
    <Button onClick={userlogout}
              variant="secondary" 
              type="submit"
              className="form_button"
            >Log Out
            </Button> 
            </div>
    <div><AdForm/></div>

    </div>
    
  )
}

export default UserPage