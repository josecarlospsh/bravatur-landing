import React, { Component } from "react";

import arrowSend from "../arrow-long-right.svg";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "//bravatur.us4.list-manage.com/subscribe/post?u=61c20aa3b8e1d7c8648a42865&id=9b6f071a64";

const BravaturForm = ({ status, message, onSubmitted }) => {
    let name, email, phone;
    const submit = () => {
      name.style.border = "none"
      email.style.border = "none"
      phone.style.border = "none"
      console.log(name.value)
      if(name.value === ""){
        name.style.border = "1px solid red"
      }if(email.value === "" || email.value.indexOf("@") === -1){
        email.style.border = "1px solid red"
      }if(phone.value === ""){
        phone.style.border = "1px solid red"
      }
      if(name.value !== "" && (email.value !== "" || email.value.indexOf("@") > -1) && phone.value !== ""){
        // name.style.border = "none"
        // email.style.border = "none"
        // phone.style.border = "none"
        onSubmitted({
          FNAME: name.value,
          EMAIL: email.value,
          PHONE: phone.value
        });
        name.value = ""
        email.value = ""
        phone.value = ""
      }
    }
  
    return (
      <div className="App-form"
      >
        <div className="frm-l">
          <div className="in">
            <input
              ref={node => (name = node)}
              type="text"
              placeholder="Nombres y Apellidos"
              />
          </div> 
          <div className="in">
            <input
            ref={node => (email = node)}
            type="email"
            placeholder="Email"
            />
          </div>
          <div className="in">
            <input
            ref={node => (phone = node)}
            type="tel"
            placeholder="Teléfono"
            />
            </div>
        </div>
        <div className="frm-r">
          <button onClick={submit}>
            <img src={arrowSend} alt="" />
          </button>
        </div>
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
              <BravaturForm onSubmitted={formData => subscribe(formData)}/>
              {status === "sending" && (
                <div className="App-msg sending" >Enviando...</div>
              )}
              {status === "error" && (
                <div className="App-msg error"
                  style={{ color: "red" }}
                //   dangerouslySetInnerHTML={{ __html: message }}
                >Hubo un error al suscribirte.</div>
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
