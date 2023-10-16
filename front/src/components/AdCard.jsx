import React, { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import adsService from '../services/adService'
import styles from '../components/AdCard.css'

const AdCard = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  

  const [adData, setAdData] = useState([]);
  

  const getdata = () => {
    adsService.getUserAds().then((response) => {
      console.log(response)
      setAdData(response.data);
    
    })
  }

  useEffect(() => {
    getdata()
  }, [])

  console.log(adData)
  console.log("userio skelbimai")

  return (
    <div className="usercard">
      <h2>My ads</h2>
      <Container className="adcardcontainer" getdata={getdata}>
        {adData.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" crossorigin="anonymous" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6cyutXcniKgalenGOfxnfUdSTHnyUOtjbMN4cxMfIomXArj5QrdZd5I7mhUjXHgTgCw&usqp=CAU" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Description: {item.description}</Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price: {item.price} €</ListGroup.Item>
              <ListGroup.Item>Category: {item.category}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Edit Ad</Card.Link>
              <Card.Link href="#">Delete Ad</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  )
}

export default AdCard
