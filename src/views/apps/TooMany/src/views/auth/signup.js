import { useState } from "react";

import axios from "axios";

import "./signUp.css"

function SignUp() {
  const [formStatus, setFormStatus] = useState({
      type:null,
      value:null
  });

  const [formData, setFormData] = useState({
    username: {
      id: "username",
      value: "",
      type: "text",
    },
    email: {
      id: "email",
      value: "",
      type: "text",
    },
    password: {
      id: "password",
      value: "",
      type: "password",
    },
  });

  async function createAccount(e) {
    e.preventDefault();

    console.log(formData);

    var newAccountResponse = await axios.post(
      "https://api.maeplet.com/auth/newUser",
      {
        username: formData.username.value,
        password: formData.password.value,
        email: formData.email.value,
      }
    );

    if (newAccountResponse.data.status == "ERR") {
      setFormStatus({
          value:newAccountResponse.data.msg,
          type:"ERR"
      });
    }else{
        setFormStatus({
            value:newAccountResponse.data.msg,
            type:"OK"
        });
    }
  }

  function handleFormUpdate(e, key) {
    var us = e.target.value;

    setFormData({
      username: {
        id: formData.username.id,
        value: key == "username" ? us : formData.username.value,
        type: formData.username.type,
      },
      email: {
        id: formData.email.id,
        value: key == "email" ? us : formData.email.value,
        type: formData.email.type,
      },
      password: {
        id: formData.password.id,
        value: key == "password" ? us : formData.password.value,
        type: formData.password.type,
      },
    });
  }

  const inputItem = Object.keys(formData).map((keyName, i) => (
    //    <div>{JSON.stringify(formData[keyName].type)}</div>

    <div style={{marginTop:'10px'}}>
    <label>
        ({formData[keyName].id})
    </label>
      <input
        type={formData[keyName].type}
        value={formData[keyName].value}
        onChange={(e) => {
          handleFormUpdate(e, formData[keyName].id);
        }}
      ></input>
    </div>
  ));

  return (
    <form onSubmit={createAccount}>
      <h1>Create an account</h1>
      
        {inputItem}

    
    {/*STATUS VALUE */}
     <p className={formStatus.type} id="statusP">{formStatus.value}</p>
    {/*STATUS VALUE */}


      <input type="submit"></input>
    </form>
  );
}

export default SignUp;
