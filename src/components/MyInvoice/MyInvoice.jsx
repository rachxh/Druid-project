import { Link } from "react-router-dom";

const MyInvoice = () => {
  return (
    <div>
      <h3>My Invoice</h3>
      <input type="search"></input>
      <div>
        <Link to="/invoices">Invoices</Link>
        <Link to="/invoices/1">Invoice1</Link>
        <Link to="/invoices/2">Invoice2</Link>
      </div>
    </div>
  );
};

export default MyInvoice;
