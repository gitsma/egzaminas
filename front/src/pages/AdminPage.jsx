import React from 'react'
import CategoryForm from '../components/CategoryForm'
import userService from '../services/userService'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AdminPage = () => {

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
    <div>
        <CategoryForm/>
    </div>
    </div>
  )
}

export default AdminPage