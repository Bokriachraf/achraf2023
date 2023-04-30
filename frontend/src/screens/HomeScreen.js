// import Header from "../components/Header";
import ProductHome from "./ProductHome";
import Slider from "../components/Slider/Slider";

import Intro from "../components/intro/Intro";
// import { useContext } from "react";
import About from "../components/about/About";
// import Contact from "../components/contact/Contact";
import ProductList from "../components/productList/ProductList";
// import Toggle from "../components/toggle/Toggle";
// import { ThemeContext } from "../context";
import ChartCareer from "../components/chartCareer/ChartCareer"



export default function HomeScreen() {
  return (
    <div className="row center">
      {/* <Slider/> */}
      <Intro/>
      <About />
      <ChartCareer />
      <ProductList />
      {/* <Contact /> */}

      {/* <ProductHome /> */}
      </div>
  );
}
