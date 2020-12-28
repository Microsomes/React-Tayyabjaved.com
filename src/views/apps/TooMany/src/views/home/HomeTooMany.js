import { useEffect, useState } from "react";

import "./home.css";

import SignUp from "../auth/signup";

import SignIn from '../auth/signin'

import CreateFact from '../AddFact/addFact'
 
function HomeTooMany() {
  return (
    <div>
      <SignUp></SignUp>
      <SignIn></SignIn>
      <CreateFact></CreateFact>
    </div>
  );
}

export default HomeTooMany;
