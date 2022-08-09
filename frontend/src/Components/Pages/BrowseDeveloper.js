import React, { useState, useEffect } from "react";
import axios from "axios";

const BrowseDeveloper = () => {
  const [products, setProduct] = useState([]);
  const[search, setSearch] = useState([]);
  const productsArray = Object.values(products);
  const { name, city, skills } = products;
  
  useEffect(() => {
    loadDevelopers();
  }, []);
 
  const loadDevelopers = async () => {
    const result = await axios.get("http://localhost:3000/getDeveloper");
    setProduct(result.data);
    setSearch(result.data);
  };

  const onInputChange = e => {
    
    try {
    let searchKey = e.target.value;
    searchKey = searchKey.toLowerCase();
    console.log(searchKey);
    
    let filteredData = [];
    for (let i = 0; i < search.length; i++) {
      let product_name = search[i].product_name.toLowerCase();
      let product_type = search[i].product_type.toLowerCase();
      let product_category = search[i].product_category.toLowerCase();
      let product_id = String(search[i].product_id).toLowerCase();
    
      if (product_name.includes(searchKey) || product_id.includes(searchKey) || product_type.includes(searchKey) || product_category.includes(searchKey)) {
          filteredData.push(search[i]);
      }
    }
    console.log(filteredData)
    setProduct(filteredData);
    }
    catch(err) {
    console.error("Error in search");
    console.log(err);
    }
  }
    
 
 
  return (
    <div className="container">
         
        <div className="py-4">
        <h3 className="mb-3 text-center">Browse Developer</h3>
 
        <div style={{fontSize:22,fontWeight:500, letterSpacing:2, padding:20}}>
          <input class="form-control" type="text" placeholder="Search"  onChange={e => onInputChange(e)} aria-label="Search"></input>
        </div>
        <br />

        <table className="table border shadow text-center">
          <thead className="thead-primary">
            <tr>
              <th scope="col">INDEX</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Skills</th>

            </tr>
          </thead>
          <tbody>
            {productsArray.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.skills}</td>
              </tr>
             ))}
          </tbody>
        </table>

        </div>
      </div> 
      
  );
            
};
 
export default BrowseDeveloper;