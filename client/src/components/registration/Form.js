import React, { useState, useContext } from "react";
import styled from "styled-components";
import firebase from "../../firebase/firebase";
import data from "../../translations/trans";

import { useHistory } from "react-router-dom";
import { UpdateDataContext } from "../../context/UpdateDataContext";

import keys from "../../emailkey";

const { SECURE_TOKEN } = keys;

export default function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");
  const [proffession, setProffession] = useState("");
  const [status, setStatus] = useState("רווק");
  const [flag, setFlag] = useState(false);
  const [code, setCode] = useState("");
  const [letUserEnterCode, setLetUserEnterCode] = useState(false);

  const [, setUserInfo, lang] = useContext(UpdateDataContext);

  let history = useHistory();

  const onSignInSubmit = (e) => {
    e.preventDefault();
    window.RecaptchaVerifier = new firebase.default.auth.RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {},
      }
    );
    addUser();
    setFlag(true);
  };

  const addUser = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      userDeatils: {
        phone,
        name,
        mail,
        proffession,
        status,
      },
    }));
    const userContactDeatils = [name, mail, phone];
    localStorage.setItem(
      "user-contact-details",
      JSON.stringify(userContactDeatils)
    );
    setName(name);
    setPhone(phone);
    setMail(mail);
  };

  const phoneValidation = () => {
    setLetUserEnterCode(true);

    const recaptcha = window.RecaptchaVerifier;
    const phoneNumber = "+972" + phoneNumberValidation;
    firebase.default
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptcha)
      .then(function (e) {
        if (code.length < 6) return;
        e.confirm(code)
          .then(function (result) {
            //TODO: ridirect to the next page
            redirectToSadna();
          })
          .catch((err) => {
            alert("phone number or code is not correct");
            console.log("there were error in the verfication code", err);
          });
      });
  };

  const sendEmailToSadna = () => {
    window.Email.send({
      SecureToken: SECURE_TOKEN,
      To: "hrchagshama@gmail.com",
      From: "hrchagshama@gmail.com",
      Subject: `לקוח חדש נרשם לסדנה!`,
      Body: `<div>
              להלן פרטי הלקוח החדש:
            <br/>
          שם: ${name}
          <br/>
          מייל: ${mail}
          <br/>
          טלפון: ${phone}
          </div>
        `,
      // Body: data[lang].feedback_questions.map((question, id) => {
      //   // return `שאלה: ${question}, תשובה: ${answer[question]}`;
      //   return (
      //     `<div cellspacing="0" cellpadding="0" border="0">
      //       <div>
      //         <div width="150">שאלה: ${question}</div>
      //         <div width="350">תשובה: ${answersForEmail[id]}</div>
      //       </tr>
      //     </div>`
      //   );
      // }),
    }).then((message) => {
      console.log(message);
    });
  };

  const redirectToSadna = () => {
    sendEmailToSadna();
    history.push("/sadna");
  };

  return (
    <Conatainer>
      <h4>{data[lang].formTitle}</h4>
      <div id="recaptcha"></div>
      {!flag ? (
        <FormContainer onSubmit={onSignInSubmit}>
          <Input
            placeholder={data[lang].form_name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={data[lang].form_mail}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Input
            type="number"
            placeholder={data[lang].form_phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            placeholder={data[lang].form_proffession}
            value={proffession}
            onChange={(e) => setProffession(e.target.value)}
          />
          <Select onChange={(e) => setStatus(e.target.value)} value={status}>
            {data[lang].form_status.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Button type="submit">{data[lang].form_button}</Button>
        </FormContainer>
      ) : (
        <>
          {letUserEnterCode ? (
            <>
              <h4>{data[lang].form_code_text}</h4>
              <Input value={code} onChange={(e) => setCode(e.target.value)} />
              <Button type="submit" onClick={phoneValidation}>
                כניסה
              </Button>{" "}
            </>
          ) : (
            <>
              {" "}
              <h4>{data[lang].form_loginPhoneNumberTitle}</h4>
              <Input
                value={phoneNumberValidation}
                onChange={(e) => {
                  setPhoneNumberValidation(e.target.value);
                }}
              />
              <Button type="submit" onClick={phoneValidation}>
                כניסה
              </Button>{" "}
            </>
          )}
        </>
      )}
    </Conatainer>
  );
}

const Conatainer = styled.div`
  margin-top: 100px;
  margin-bottom: auto;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;
const Input = styled.input`
  color: "#b9babaff";
  border-radius: 10px;
  border: 2px solid #b9babaff;
  width: 200px;
  padding: 0.6rem;
  margin-bottom: 5px;
`;

const Select = styled.select`
  color: "#b9babaff";
  border-radius: 10px;
  border: 2px solid #b9babaff;
  width: 100px;
  padding: 0.6rem;
  margin-bottom: 5px;
`;
const Button = styled.button`
  background-color: #84c128ff;
  color: white;
  padding: 0.1rem;
  width: 150px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid white;
  margin-left: 50px;
  &:hover {
    opacity: 0.85;
  }
`;
