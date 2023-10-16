import React, { useState} from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import categoryService from '../services/categoryService'

const CategoryForm = () => {

  const [category, setCategory] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const CategoryForm = {
      category: category,
    }

    categoryService.setCategory(CategoryForm);

    setCategory('');
    console.log("Category uploaded successfully")

    
  };


  return (
    <div>
      <div className="adformbody">
      <h2>Add new category</h2>
      <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text 
        id="basic-addon1"
        >Category Name</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          value={category}
          onChange={(e) => {setCategory(e.target.value)}}
        />
      </InputGroup>


      <Button variant="success" type="submit" className='col-3 mt-3 mb-5'>
        Submit
      </Button>
      </Form>
    </div>


    </div>
  )
}

export default CategoryForm