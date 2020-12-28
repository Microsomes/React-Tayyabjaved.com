import { useState } from "react";

import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    username: {
      id: "username",
      value: "dd",
      type: "text",
    },
    email: {
      id: "email",
      value: "dd",
      type: "text",
    },
    password: {
      id: "password",
      value: "c",
      type: "password",
    },
  });

  async function createAccount(e) {
    e.preventDefault();

    console.log(formData);

    var newAccountResponse = await axios.post(
      "https://api.maeplet.com/auth/newUser",
      {
        username: "chris123",
        password: "tayyab123",
        email: "tayyan54@gmail.com",
      }
    );

    console.log(newAccountResponse)
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

    <>
      <input
        type={formData[keyName].type}
        value={formData[keyName].value}
        onChange={(e) => {
          handleFormUpdate(e, formData[keyName].id);
        }}
      ></input>
    </>
  ));

  return (
    <form onSubmit={createAccount}>
      <h1>Create an account</h1>
      {inputItem}
      {/* <input
        onChange={(e) => {
          handleFormUpdate(e, "username");
        }}
        value={formData.username.value}
        name="username"
        type="text"
        placeholder="username"
      ></input> */}

      <input type="submit"></input>
    </form>
  );
}

export default SignUp;
