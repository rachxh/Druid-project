import { Link } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";
import classes from "./Invoices.module.css"

const exampleInvoices = [
  {
    id: 1,
    name: "Project 1", 
    productionHits: 40323,
    hours: 744,
    hoursFee: 31.02,
    hitsCost: 199.85,
    storageExtra: 12.93,
  },
  {
    id: 2,
    name: "Project 2", 
    productionHits: 70322,
    hours: 744,
    hoursFee: 31.02,
    hitsCost: 199.85,
    storageExtra: 12.93,
  },
  {
    id: 3,
    name: "Project 3", 
    productionHits: 50443,
    hours: 744,
    hoursFee: 31.02,
    hitsCost: 199.85,
    storageExtra: 12.93,
  }
];

const Invoices = () => {
  return (
    <>
      <h3>Invoices</h3>
      <BackButton address="/dashboard"/>
      <div>
        <div className={classes["invoice-info"]}>
          <div>
            <h4>Druid Oy</h4>
            <p>Pasilankatu 2</p>
            <p>00240 Helsinki</p>
            <p>Finland</p>
          </div>
          <div>
            <h4>INVOICE TO:</h4>
            <p>ABC Oy</p>
            <p>00100 Helsinki</p>
            <p>Finland</p>
          </div>
          <div>
            <h4>Invoice number</h4>
            <p>#1003</p>
          </div>
        </div>
        <div>
            <table style={{width:"100%"}}>
              <thead>           
                <tr>
                  <th>Invoice</th>
                  <th>Production hits/mo:</th>
                  <th>Hours:</th>
                  <th>Hours fee:</th>
                  <th>Hits cost:</th>
                  <th>Storage extra:</th>
                </tr>
              </thead>
            <tbody>
              <tr>
                <td></td>
                <td>October 2022</td>
                <td></td>
                <td>0.04 €</td>
                <td></td>
                <td>0.03 €</td>
              </tr>
            {
              exampleInvoices.map(invoice =>
                <tr key={invoice.id}>
                  <td>
                    <Link to= {`/invoices/${invoice.id}`}
                    state={{invoice}}
                  >{invoice.name}</Link>
                  </td>
                  <td>{invoice.productionHits}</td>
                  <td>{invoice.hours}</td>
                  <td>{invoice.hoursFee} €</td>
                  <td>{invoice.hitsCost} €</td>
                  <td>{invoice.storageExtra} €</td>
                </tr>
              )
            }
            <tr>
                <td>
                  Total hits
                </td>
                <td>322439</td>
                <td>3454</td>
                <td>123 €</td>
                <td>598 €</td>
                <td>36 €</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
};

export default Invoices;
