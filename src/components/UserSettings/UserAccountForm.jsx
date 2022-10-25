import React from 'react'

const UserAccountForm = () => {
  return (
    <>
      <h3>Edit User Account</h3>
      <form>
        <div>
          <label htmlFor="fname">First name</label>
          <input type="text" name="fname"/>
        </div>
        <div>
          <label htmlFor="lname">Last name</label>
          <input type="text" name="lname"/>
        </div>
        <div>
          <label htmlFor="company">Company name</label>
          <input type="text" name="company"/>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone"/>
        </div>
          <button type="submit">Submit</button>
      </form>
      </>
  )
}

export default UserAccountForm