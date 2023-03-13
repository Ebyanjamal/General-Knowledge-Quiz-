import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const user = null;
  // const {user} = useContext(AppContext)
  return (
    <div className="d-flex gap-3">
      <Link to="/home">Home ← </Link>

      {!user ? (
        <>
          <Link to="/Login">Login In ← </Link>{" "}
          <Link to="/Signup">Sign Up ← </Link> 
        </>
      ) : (
        <>
          <Link>Account ← </Link>
          <Link>logout ← </Link>
        </>
      )}
    </div>
  );
}
