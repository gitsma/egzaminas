import axios from 'axios';

const API_URL = '/api/category';

//gauti visus visu skelbimus
//home page
const getAllCategories = async()=>{
    try {
        const response = await axios.get(API_URL);
        if (response.data !== undefined) {
        return response.data;}
    } catch (error) {
        console.log(error);
    }
}


//create new category
const setCategory = async (adData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
      const response = await axios.post(API_URL + '/adminpage', adData,config)
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
    
  }
  



const categoryService = {
    getAllCategories,
    setCategory

}

export default categoryService