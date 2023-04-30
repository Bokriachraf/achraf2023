import "./productList.css";
import Product from "../product/Product";
import { products } from "./data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire</h1>
        <p className="pl-desc">
        here are some projects carried out recently with mern technology
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} /> 
        
        ))}
      </div>
    </div>
  );
};

export default ProductList;