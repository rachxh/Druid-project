import React from 'react'

const UserPassword = () => {
  return (
    <>
        <h3>Change Password</h3>
        <form>
            <div>
                <label htmlFor="currentPass">Current password</label>
                <input type="password" name="currentPass" required />
            </div>
            <p>New password</p>
            <div>
                <label htmlFor="newPass">New Password</label>
                <input type="password" name="newPass" required/>
            </div>
            <div>
                <label htmlFor="confirmPass">Confirm Password</label>
                <input type="password" name="confirmPass" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default UserPassword