import styled from 'styled-components'
import Clock from './Clock'
import './TableAllAuction.css'
const Image = styled.img`
    height: 80px;
    z-index: 2;
`
const RowTable = ({product}) => {
  return (
    <li className="table-row">
      {console.log(product)}
      <div className="col col-1" data-label="Image">
      <Image src={product.img}/>
      </div>
      <div className="col col-2" data-label="Title">{product.title}</div>
      <div className="col col-3" data-label="Price">{product.price}</div>
      <div className="col col-4" data-label="">{product.allAuction[product.allAuction.length-1].user}</div>
      <div className="col col-4" data-label="">{product.allAuction.length}</div>
      <div className="col col-4" data-label=""><Clock endAuction={product.endAuction && product.endAuction}/></div>
    </li>
  )
}

export default RowTable