import { useState } from "react";
import BackButton from "../UI/BackButton/BackButton";
import UserAccountForm from "./UserAccountForm";
import UserPassword from "./UserPassword";

const UserSettings = () => {
  const [showEditForm, setShowEditForm] = useState(false)
  const [showChangePass, setShowChangePass] = useState(false)

  const handleShowEdiForm = () => {
    setShowEditForm(prev => !prev)
  }
  const handleShowChangePass = () => {
    setShowChangePass(prev => !prev)
  }
  return (
    <>
      <h3>Account Details</h3>
      <BackButton />
      <button onClick={handleShowEdiForm}>Edit</button>

      <div>
        <h4>First name</h4>
        <p>Lorem ipsum</p>
      </div>
      <div>
        <h4>Last name</h4>
        <p>Lorem ipsum</p>
      </div>
      <div>
        <h4>Company name</h4>
        <p>Lorem ipsum</p>
      </div>
      <div>
        <h4>Email address</h4>
        <p>Lorem ipsum</p>
      </div>
      <div>
        <h4>Phone</h4>
        <p>Lorem ipsum</p>
      </div>

      <button onClick={handleShowChangePass}>Change password</button>
      {
        showEditForm && <UserAccountForm />
      }
      {
        showChangePass && <UserPassword />
      }
      
    </>
  );
};

export default UserSettings;
