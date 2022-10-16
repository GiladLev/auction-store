import './TableAllAuction.css'

const TableAllAuction = () => {
  return (
      <div className="container">
  <h2>Responsive Tables Using LI </h2>
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Image</div>
      <div className="col col-2">Title</div>
      <div className="col col-3">Price</div>
      <div className="col col-4">buyer name</div>
      <div className="col col-4">Payment Status</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">42235</div>
      <div className="col col-2" data-label="Customer Name">John Doe</div>
      <div className="col col-3" data-label="Amount">$350</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
    
  </ul>
</div>
  )
}

export default TableAllAuction