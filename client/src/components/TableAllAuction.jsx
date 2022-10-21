import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import RowTable from './RowTable';
import './TableAllAuction.css'

const TableAllAuction = () => {
  const [products, setProducts]=useState('')
  const user =JSON.parse(localStorage.getItem('user'))?.username
  useEffect(() => {
    const getProudcts = async () => {
      try {
        const res = await publicRequest.get(`products/myauction/${user}`)
        setProducts(res.data)
      } catch (err) {}
    };
    getProudcts();
  });
  return (
      <div className="container">
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Image</div>
      <div className="col col-2">Title</div>
      <div className="col col-3">Price</div>
      <div className="col col-4">buyer name</div>
      <div className="col col-4">Payment Status</div>
    </li>
    {products && products.map((product, id)=> {
     return <RowTable key={id} product={product}/>
    })}
  </ul>
</div>
  )
}

export default TableAllAuction