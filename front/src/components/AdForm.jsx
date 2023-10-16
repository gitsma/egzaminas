import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import styles from '../components/AdForm.css'
import { Col } from 'react-bootstrap';
import adsService from '../services/adService'
import {setAd} from '../services/adService'


const AdForm = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); 
  const [image, setImage] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [category, setCategory] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const AdForm = {
      name: name,
      description: description,
      image: image,
      price: price,
      category: category,
    }

    adsService.setAd(AdForm);

    setName('');
    setDescription('');
    setImage('');
    setPrice('');
    setCategory('');
    console.log("Ad uploaded successfully")

    
  };



  return (
    <div className="adformbody">
      <h2>New Ad</h2>
      <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text 
        id="basic-addon1"
        >Product Name</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </InputGroup>

      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Category</Form.Label>
          <Form.Select 
            defaultValue={category}
            onChange={(e) => {setCategory(e.target.value)}}>
            <option>Choose...</option>
            <option>Furniture</option>
            <option>Clothes</option>
            <option>Computers</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

      <Form.Label htmlFor="basic-url"></Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text 
          id="basic-addon3">
          Product photo https://</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3"
        value={image}
        onChange={(e) => {setImage(e.target.value)}} />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Price, €</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" 
        value={price}
        onChange={(e) => {setPrice(e.target.value)}}/>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Description:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea"
        value={description}
        onChange={(e) => {setDescription(e.target.value)}} />
      </InputGroup>

      <Button variant="success" type="submit" className='col-3 mt-3 mb-5'>
        Submit
      </Button>
      </Form>
    </div>
  )
}

export default AdForm