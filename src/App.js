import React, { useRef } from 'react';
import "./App.css"

function App() {

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbygTHJowkQ3UTYDlTdyEzwAq1BsU8LtuJerGSOWV1gqXoWtH2L9_umU4gqtcm0WVWPo/exec"
  const handleSubmit = (e) =>{
      e.preventDefault()

      fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
      .then(res => {
          console.log("SUCCESSFULLY SUBMITTED")
      })
      .catch(err => console.log(err))
  }

  return (
    <div class="content">
      <h1 class="title">The Off Topic Newsletter</h1>
      <form method="post" ref={formRef} name="google-sheet" onSubmit={handleSubmit}>
          <div className="form-style">
              <input class="email" type="Email" name="Email" placeholder='Your Email *' />
          </div>
          <div className="form-style" class="surroundsubmit">
              <input class="submit" type="submit" name="submit" value="Submit" />
          </div> 
      </form>
    </div>
  );
}

export default App;
