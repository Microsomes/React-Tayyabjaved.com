import { useEffect, useState } from "react";

import "./home.css";

import SignUp from "../auth/signup";

import SignIn from '../auth/signin'
 
function HomeTooMany() {
  return (
    <div>
      <SignUp></SignUp>
      <SignIn></SignIn>
    </div>
  );
}

export default HomeTooMany;
