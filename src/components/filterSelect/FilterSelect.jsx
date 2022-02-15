import { useState } from 'react'
import './filterSelect.scss'

export default function FilterSelect({product}) {
  const [state, setState] = useState("");
  return (
    <div className="filterSelect">
      <select name="products" id="">
        {product.map(pro => (
          <>
            <option value={pro.product_name}>{pro.product_name }</option>
          </>
        ))}
      </select>
      <select name="state" id="">
        {product.map(pro => (
           <>
          {/* {setState(pro.address.state)} */}
          {/* {console.log(state)} */}
          {pro.address.state !== pro.address.state ? (
            <option value={pro.address.state}>{pro.address.state}</option>
            ) : ""}
           </>
        ))}
      </select>
      <select name="city" id="">
        {product.map(pro => (
          <option value={pro.address.city}>{pro.address.city}</option>
        ))}
      </select>
    </div>
  )
}
