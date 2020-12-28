import { useState } from "react";

import axios from "axios";

import "./signUp.css";

function SignIn() {
  const [formStatus, setFormStatus] = useState({
    type: null,
    value: null,
  });

  const [formData, setFormData] = useState({
    username: {
      id: "username",
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

    var SignInResponse = await axios.post(
      "https://api.maeplet.com/auth/login",
      {
        username: formData.username.value,
        password: formData.password.value,
      }
    );

    console.log(SignInResponse.data);

    if (SignInResponse.data.status == "ERR") {
      setFormStatus({
        value: SignInResponse.data.msg,
        type: "ERR",
      });
    } else {
      setFormStatus({
        value:
          "Logged in as " +
          JSON.stringify(SignInResponse.data.details.username),
        type: "OK",
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
      password: {
        id: formData.password.id,
        value: key == "password" ? us : formData.password.value,
        type: formData.password.type,
      },
    });
  }

  const inputItem = Object.keys(formData).map((keyName, i) => (
    //    <div>{JSON.stringify(formData[keyName].type)}</div>

    <div style={{ marginTop: "10px" }}>
      <label>({formData[keyName].id})</label>
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
      <h1>Login to your account</h1>

      {inputItem}

      {/*STATUS VALUE */}
      <p className={formStatus.type} id="statusP">
        {formStatus.value}
      </p>
      {/*STATUS VALUE */}

      <input type="submit"></input>
    </form>
  );
}

export default SignIn;
