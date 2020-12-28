import { useState, useEffect } from "react";

import axios from "axios";

import "./addFact.css";

function CreateFact() {
  const [isReady, setReady] = useState(false);

  const [authData,setAuthData]= useState(null)



  const AUTH= useEffect(()=>{
      setTimeout(()=>{
          setReady(true)
          setAuthData(localStorage.getItem("token"))
      },1000)
  },[])

  const [formStatus, setFormStatus] = useState({
    type: null,
    value: null,
  });

  const [formData, setFormData] = useState({
    title: {
      id: "title",
      value: "",
      type: "text",
    },
    fact: {
      id: "fact",
      value: "",
      type: "text",
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

    if (formData.username.value.length == 0) {
      setFormStatus({
        type: "ERR",
        value:
          "Invalid username although technically valid, we wont allow the front end to accept this. Psst, you can use the api if you want to interact with a blank account.",
      });
      return;
    }

    if (SignInResponse.data.status == "ERR") {
      setFormStatus({
        value: SignInResponse.data.msg,
        type: "ERR",
      });
    } else {
      localStorage.setItem("token", SignInResponse.data.token);
      console.log(SignInResponse.data.details);
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
      title: {
        id: formData.title.id,
        value: key == "username" ? us : formData.title.value,
        type: formData.title.type,
      },
      fact: {
        id: formData.fact.id,
        value: key == "password" ? us : formData.fact.value,
        type: formData.fact.type,
      },
    });
  }

  const inputItem = Object.keys(formData).map((keyName, i) => (
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

  var widget;

  if (isReady) {
    widget = (
      <form onSubmit={createAccount}>
        <h1>Add A Fact</h1>

        

        {inputItem}

        {/*STATUS VALUE */}
        <p className={formStatus.type} id="statusP">
          {formStatus.value}
        </p>
        {/*STATUS VALUE */}

        <input type="submit"></input>
      </form>
    );
  } else {
    widget = <h2 style={{ marginLeft: "20px" }}>WAITING TO LOAD AUTH</h2>;
  }

  return widget;
}

export default CreateFact;
