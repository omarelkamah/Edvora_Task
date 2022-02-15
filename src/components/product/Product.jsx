import './product.scss'

export default function Product({product}) {
  return (
    <div className="product">
        <div className="productTop">
            <div className="imgContainer">
                <img src={product.image} alt="" />
            </div>
            <div className="productTopInfo">
                <span className="productName">{product.product_name}</span>
                <span className="brandName">{product.brand_name}</span>
                <span className="price">{product.price}</span>
            </div>
        </div>
        <div className="productBottom">
            <div className="productLocation">
                <span>{product.address.state}</span>
                <span>{product.date}</span>
            </div>
            <p className="productDesc">{product.discription}</p>
        </div>
    </div>
  )
}
