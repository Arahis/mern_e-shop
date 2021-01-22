import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
// import products from "../../products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchedProducts = async () => {
      const { data } = await axios("/api/products");
      setProducts(data);
    };
    fetchedProducts();
  }, []);
  console.log(products);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
