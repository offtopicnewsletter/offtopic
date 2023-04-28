import React, { useRef, useState } from 'react';
import "./App.css"

function App() {

  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbygTHJowkQ3UTYDlTdyEzwAq1BsU8LtuJerGSOWV1gqXoWtH2L9_umU4gqtcm0WVWPo/exec"
  const handleSubmit = (e) =>{

      setShow(true);

      if (isEmail(input)) {
        e.preventDefault()

        fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
        })
        .catch(err => console.log(err))
      }

  }

  const isEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }

  return (
    <div class="content">
      <h1 class="title">The Off Topic Newsletter</h1>
      {!show && (
      <form method="post" ref={formRef} name="google-sheet" onSubmit={handleSubmit} class="form">
          <div className="form-style">
              <input class="email" type="Email" name="Email" placeholder='Your Email *' 
                onInput={e => setInput(e.target.value)}/>
          </div>
          <div className="form-style" class="surroundsubmit">
              <input class="submit" type="submit" name="submit" value="Submit" />
          </div> 
      </form>
      )}
      {show && (
        <h1 class="title">Thank you for joining!</h1>
      )}
    </div>
  );
}

export default App;
