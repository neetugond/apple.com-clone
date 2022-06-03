import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [arr, setArr] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getarr();
  }, []);

  function getarr() {
    axios
      .get("https://neetuapi.herokuapp.com/ecommerce/data")
      .then(({ data }) => {
        setData(data);
        setArr(data)
      });
  }

  function Sort(val) {
    let temp;
    if (val == "asc") {
      temp = arr.sort((a, b) => a.price - b.price);
    } else if (val == "dsc") {
      temp = arr.sort((a, b) => b.price - a.price);
    }
    setArr([...temp]);
  }

  const Filter = (val) => {
    const vals = []
      data.map((e) => {
        if(e.category===val){
        vals.push(e)
        }
      });
      setArr([...vals])
  };
  return (
    <div>
      <Box>
        <Typography variant="h3">Store.</Typography>
        <Typography sx={{ padding: 4 }} variant="h3">
          Store.
          <span style={{ color: "grey" }}>
            The best way to buy the <br /> products you love.
          </span>
          <hr />
        </Typography>
      </Box>

      <div className="container">

        <button
          className="btn btn-outline-dark me-2"
          onClick={() => Filter("iphone")}
        >
          Filter by iPhone
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => Filter("macbook")}
        >
          Filter by MacBook
        </button>
        
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => Sort("asc")}
        >
          ASC Sort
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => Sort("dsc")}
        >
          DSC Sort
        </button>

        {/* main product item  */}
        <div className="row justify-content-around">
          {/* {arr.map(cardItem)} */}
          {arr.map((item) => (
            <div
              className="card my-5 py-4"
              key={item.id}
              style={{ width: "22rem", gridGap: 10 }}
            >
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div class="card-body" />
              <h5 className="card-title">{item.title}</h5>
              <p className="lead">${item.price}</p>
              <Link to={`/product/${item.id}`} className="btn btn-outline-dark">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
