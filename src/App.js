import React, { useState } from "react";

import "./styles.css";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "demo",
      password: "demo"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contrasenia </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const renderimage=(
    <div class="imgBox">
          <img src="https://images5.alphacoders.com/512/thumb-1920-512463.jpg" alt="auto" height="auto" width="70%" id="image-section"/>
        </div> 
  );

  return (
    <div className="app">
      <div className={isSubmitted? "login-formimagen":"login-form"}>
        <div className="title">{isSubmitted? <div>😍Para Abigail la niña mas linda del mundo mundial 😍</div> : <div>Inicio de sesion</div>}</div>
        {isSubmitted ? renderimage: renderForm}
      </div>
    </div>
  );
}

export default App;