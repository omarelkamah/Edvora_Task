import FilterSelect from '../filterSelect/FilterSelect'
import './filters.scss'

export default function Filters({product}) {
  return (
    <div className="filters">
        <div className="filtersTitle">
            <h3>Filters</h3>
        </div>
        <FilterSelect product={product} />
        {console.log(product)}
    </div>
  )
}
