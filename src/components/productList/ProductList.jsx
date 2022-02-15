import Product from '../product/Product'
import './productList.scss'

export default function ProductList({product}) {
  return (
    <div className="productList">
        {product.map(pro => (
          <>
            <div className="productListTitle">
              <h2>{pro.product_name}</h2>
            </div>
            <div className="products">
              <div className="productsContainer">
                <Product product={pro}/>
              </div>
            </div>
          </>
    ))}
      </div>
  )
}
