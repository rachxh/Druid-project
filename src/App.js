import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import GenerateReports from "./components/GenerateReports/GenerateReports";
import LoginPage from "./components/LoginPage/LoginPage";
import UserSettings from "./components/UserSettings/UserSettings";
import Layout from "./pages/Layout";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Invoice from "./components/InvoiceDetails/InvoiceDetails";
import MissingPass from "./components/MissingPass/MissingPass";
import Ticket from "./components/Ticket/Ticket";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import CreateUser from "./components/CreateUser/CreateUser";
import CreateProject from "./components/CreateProject/CreateProject";
import CreateCustomer from "./components/CreateCustomer/CreateCustomer";
import Invoices from "./components/Invoices/Invoices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="user-settings" element={<UserSettings />} />
          <Route path="generate-reports" element={<GenerateReports />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="missing-pass" element={<MissingPass />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="projects/:id/ticket/:id" element={<Ticket />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/:id" element={<Invoice />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="create-customer" element={<CreateCustomer />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
