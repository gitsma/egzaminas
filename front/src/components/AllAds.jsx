import React, { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import adsService from '../services/adService'
import styles from '../components/AllAds.css'

const AllAds = () => {

  const [adData, setAdData] = useState([]);
  

  const getdata = () => {
    adsService.getAllAdsData().then((response) => {
      console.log(response);
      setAdData(response.data);
    })
  }

  useEffect(() => {
    getdata()
  }, [])

  console.log(adData)

  return (
    <div className="alladscard">
      <h2>All ads</h2>
      <Container className="alladscontainer" getdata={getdata}>
        {adData.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://replyco.com/wp-content/uploads/2021/01/Selling-Used-Items_Recommerce-scaled.jpg" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Description: {item.description}</Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price: {item.price} €</ListGroup.Item>
              <ListGroup.Item>Category: {item.category}</ListGroup.Item>
            </ListGroup>

            <Card.Body>
              <Card.Link href="#">Comment ad</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  )
}

export default AllAds