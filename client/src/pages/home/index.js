import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Spinner } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import { listProducts } from "../../redux/actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productList);
  const { loading, products, error } = data;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "50px",
            height: "50px",
            margin: "auto",
            display: "block",
          }}
        ></Spinner>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
