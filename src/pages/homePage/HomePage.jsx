import { useEffect, useState } from "react"
import Filters from "../../components/filters/Filters"
import Header from "../../components/header/Header"
import ProductList from "../../components/productList/ProductList"
import axios from 'axios'
import "./homePage.scss"

export default function HomePage() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://assessment-edvora.herokuapp.com/")
          .then(pro => {
            setProduct(pro.data)
          })
          .catch(() => console.log("error"));
  }, []);

  return (
    <div className="homePage">
        <Filters product={product}/>
        <div className="otherComponents">
            <Header />
            <ProductList product={product} />
        </div>
    </div>
  )
}
