import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  let [arr, setArr] = useState([])
  useEffect(() => {
    getarr()
  }, [])
  // console.log(arr)
  function getarr() {
    axios.get("https://neetuapi.herokuapp.com/ecommerce/data").then((({data}) => {
      setArr(data)
    })
    )

  }
  // useEffect(() => { setArr(arr) }, [arr])
  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: "22rem", gridGap: 10 }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div class="card-body" />
        <h5 className="card-title">{item.title}</h5>
        <p className='lead'>${item.price}</p>
        <Link to={`/product/${item.id}`} className="btn btn-outline-dark">View Product</Link>

      </div>
    )
  }
  useEffect(() => { }, [arr])

  function Sort(val) {

    let temp;
    if (val == "asc") {
      temp = arr.sort((a, b) => a.price - b.price)
    }
    else if (val == "dsc") {
      temp = arr.sort((a, b) => b.price - a.price)
    }
    setArr([...temp])
  }


  function Filter(val) {
    let temp = arr.filter((e) => e.title.startsWith(val))
    setArr([...temp]);
  }
  console.log(arr)
  return (
    <div>
      <Box>
        <Typography variant="h3">
          Store.

        </Typography>
        <Typography sx={{ padding: 4 }} variant="h3">Store.
          <span style={{ color: 'grey' }}>The best way to buy the <br /> products you love.
          </span>
          <hr />
        </Typography>
      </Box>

      <div className="container">
        <button onClick={() => Filter("iPhone")}>Filter by iPhone</button>
        <button onClick={() => Filter("MacBook")}>Filter by MacBook</button>
        <button onClick={() => Sort("asc")}>ASC Sort</button>
        <button onClick={() => Sort("dsc")}>DSC Sort</button>


        <div className="row justify-content-around" >
          {arr.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product