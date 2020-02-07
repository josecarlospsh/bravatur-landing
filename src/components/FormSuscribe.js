import React, { Component } from "react";

import arrowSend from "../arrow-long-right.svg";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "//bravatur.us4.list-manage.com/subscribe/post?u=61c20aa3b8e1d7c8648a42865&id=9b6f071a64";

const BravaturForm = ({ status, message, onSubmitted }) => {
    let email;
    const submit = () => {
        if(!email.value === "" || email.value.indexOf("@") > -1){
            email.style.border = "none"
            onSubmitted({
                  EMAIL: email.value
                });
        }else{
            email.style.border = "1px solid red"
        }
        //email &&
        //email.value.indexOf("@") > -1 &&
        // onSubmitted({
        //   EMAIL: email.value
        // });
    }
  
    return (
      <div className="App-form"
      >
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Suscribete"
        />
        <button onClick={submit}>
          <img src={arrowSend} alt="" />
        </button>
      </div>

    );
  };
  

class FormSuscribe extends Component {

  render() {
    return (
      <div>
        {/* <form className="App-form">
          <input type="text" placeholder="Suscribe" />
          <button><img src={arrowSend} alt=""/></button>
        </form>  */}
        {/* <MailchimpSubscribe url={url}/> */}
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <BravaturForm onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && (
                <div className="App-msg sending" >Enviando...</div>
              )}
              {status === "error" && (
                <div className="App-msg error"
                  style={{ color: "red" }}
                //   dangerouslySetInnerHTML={{ __html: message }}
                >Hubo un error al suscribirte.</div>
              )}
              {status === "duplicate" && (
                <div className="App-msg duplicate"
                  style={{ color: "red" }}
                //   dangerouslySetInnerHTML={{ __html: message }}
                >Ups, al parecer ya te suscribiste :)</div>
              )}
              {status === "success" && (
                <div className="App-msg success">Gracias por suscribirte!</div>
              )}
            </div>
          )}
        />
        {/* <div className="App-msg">Are you ...</div> */}
      </div>
    );
  }
}

export default FormSuscribe;
