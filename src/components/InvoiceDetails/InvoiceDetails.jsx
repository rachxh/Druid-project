import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";


const Invoice = () => {
  const location = useLocation();
  const invoice = location.state.invoice

  return (
    <>
      <p>Invoice {invoice.name}</p>
      <p>Production hits/mo: {invoice.productionHits}</p>
      <p>Hours: {invoice.hours}</p>
      <p>Hours fee: {invoice.hoursFee}</p>
      <p>Hit costs: {invoice.hitsCost}</p>
      <p>Storage extra: {invoice.storageExtra}</p>
    </>
  );
};

export default Invoice;
