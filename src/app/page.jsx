import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Header from "./components/Header/app";
import Carousel from "./components/Carousel/app";
import Iconbx from "./components/Iconbox/app";
import Product from "./components/Products/app";
import Cards from "./components/Cards/app";
import Posts from "./components/Posts/app";
import Experts from "./components/Experts/app";

export default function index() {
  return (
    <div>
      <Header />
      <Carousel />
      <Iconbx />
      <Product />
      <Cards />
      <Posts />
      <Experts />
    </div>
  );
}
