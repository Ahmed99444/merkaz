import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { UpdateDataContext } from "../../../context/UpdateDataContext";
import data from "../../../translations/trans";
import { Container } from "../../home-page/About";
import { Input } from "../Character";
import keys from "../../../emailkey";

const { SECURE_TOKEN } = keys;

export default function Feedback() {
  const [answer, setAnswer] = useState([{}]);
  const [answersForEmail, setAnswersForEmail] = useState([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState([]);
  const [, setUserInfo, lang] = useContext(UpdateDataContext);
  const [seleceted, setSelected] = useState([[0], [0], [0], [0], [0], [0]]);
  const [feedbackSent, setFeedbackSent] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user-contact-details");
    const parseData = data && JSON.parse(data);
    if (parseData) {
      setUserData([...parseData]);
    }
  }, []);

  useEffect(() => {
    console.log("messages: ", messages);
    setUserInfo((prevState) => ({
      ...prevState,
      feedback: {
        userFeedback: answer,
        userTextFeedback: messages,
        feedbackSent,
      },
    }));
  }, [setUserInfo, answer, messages, feedbackSent]);

  const handleClickOnNumber = (
    userAnswer,
    question,
    selectedID,
    arrayIndex
  ) => {
    const newSelectedState = [...seleceted];
    newSelectedState[arrayIndex] = null;
    newSelectedState[arrayIndex] = [selectedID];
    setSelected(newSelectedState);

    setAnswer((prevState) => [
      ...prevState,
      {
        [question]: userAnswer,
      },
    ]);
    const newAnswersForEmailState = [...answersForEmail];
    newAnswersForEmailState[arrayIndex] = userAnswer;
    setAnswersForEmail(newAnswersForEmailState);
  };

  const handleChange = (value, index) => {
    const newState = [...messages];
    newState[index] = value;
    setMessages(newState);
  };

  const snedEmailToSadna = () => {
    if (answersForEmail.length + messages.length < 7) {
      alert("אנא מלא את כל המשוב");
    } else {
      const [userName, userEmail, userPhoneNumber] = userData;
      window.Email.send({
        SecureToken: SECURE_TOKEN,
        To: "hrchagshama@gmail.com",
        From: "hrchagshama@gmail.com",
        Subject: `משוב מאת לקוח - ${userName}`,
        Body: `<div>
      שאלה: ${data[lang].feedback_questions[0]}<br/> תשובה: ${answersForEmail[0]}
        </div>
        <br/>
        <div>
        שאלה: ${data[lang].feedback_questions[1]}<br/> תשובה: ${answersForEmail[1]}
          </div>
          <br/>
          <div>
        שאלה: ${data[lang].feedback_questions[2]}<br/> תשובה: ${answersForEmail[2]}
          </div>
          <br/>
          <div>
        שאלה: ${data[lang].feedback_questions[3]}<br/> תשובה: ${answersForEmail[3]}
          </div>
          <br/>
          <div>
        שאלה: ${data[lang].feedback_questions[4]}<br/> תשובה: ${answersForEmail[4]}
          </div>
          <br/>
          <div>
        שאלה: ${data[lang].feedback_questions[5]}<br/> תשובה: ${answersForEmail[5]}
          </div>
          <br/>
          <div>
        שאלה: נקודות לשיפור<br/> תשובה: ${messages[0]}
          </div>
          <br/>
          <div>
        שאלה: נקודות לשיפור<br/> תשובה: ${messages[1]}
          </div>
          <br/>
          <div>
        שאלה: נקודות לשיפור<br/> תשובה: ${messages[2]}
          </div>
          <br/>
          פרטי הלקוח:
          <br/>
          שם: ${userName}
          <br/>
          מייל: ${userEmail}
          <br/>
          טלפון: ${userPhoneNumber}
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
        message === "OK" && setFeedbackSent(true);
        alert(message);
      });
    }
  };

  return (
    <Container
      style={{
        width: "35%",
        marginBottom: "auto",
        marginTop: "290px",
        fontSize: "1.2rem",
      }}
    >
      {!showFeedbackForm ? (
        <>
          {" "}
          <p>
            {data[lang].feedback_description[0]}{" "}
            <span style={{ color: "#8aca28ff", fontWeight: "bold" }}>H</span>
            <span style={{ color: "#4faddfff", fontWeight: "bold" }}>R</span>
            <span style={{ color: "#f08c13ff", fontWeight: "bold" }}>
              C
            </span>{" "}
          </p>
          <p> {data[lang].feedback_description[1]} </p>
          <p style={{ fontWeight: "bold" }}>
            {" "}
            {data[lang].feedback_description_bold}{" "}
          </p>
          <Button onClick={() => setShowFeedbackForm(true)}>
            {data[lang].feedback_button}
          </Button>
        </>
      ) : (
        <>
          {data[lang].feedback_questions.map((question, index) => (
            <>
              <div>{question}</div>
              <Numbers>
                <Item
                  style={{
                    backgroundColor: seleceted[index][0] === 0 && "#8aca28",
                    color: seleceted[index][0] === 0 && "white",
                  }}
                  onClick={() => handleClickOnNumber(1, question, 0, index)}
                >
                  1
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 1 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 1 && "white",
                  }}
                  onClick={() => handleClickOnNumber(2, question, 1, index)}
                >
                  2
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 3 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 3 && "white",
                  }}
                  onClick={() => handleClickOnNumber(3, question, 3, index)}
                >
                  3
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 4 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 4 && "white",
                  }}
                  onClick={() => handleClickOnNumber(4, question, 4, index)}
                >
                  4
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 5 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 5 && "white",
                  }}
                  onClick={() => handleClickOnNumber(5, question, 5, index)}
                >
                  5
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 6 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 6 && "white",
                  }}
                  onClick={() => handleClickOnNumber(6, question, 6, index)}
                >
                  6
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 7 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 7 && "white",
                  }}
                  onClick={() => handleClickOnNumber(7, question, 7, index)}
                >
                  7
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 8 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 8 && "white",
                  }}
                  onClick={() => handleClickOnNumber(8, question, 8, index)}
                >
                  8
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 9 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 9 && "white",
                  }}
                  onClick={() => handleClickOnNumber(9, question, 9, index)}
                >
                  9
                </Item>
                <Item
                  style={{
                    backgroundColor:
                      seleceted[index][0] === 10 ? "#8aca28" : "lightgray",
                    color: seleceted[index][0] === 10 && "white",
                  }}
                  onClick={() => handleClickOnNumber(10, question, 10, index)}
                >
                  10
                </Item>
              </Numbers>
              <Line></Line>
            </>
          ))}
          <p>{data[lang].feedback_message[0]}</p>
          <br></br>
          <Container style={{ flexDirection: "row" }}>
            <Container>
              <label style={{ marginBottom: "10px" }}>
                {data[lang].feedback_message[1]}
              </label>
              <Input
                style={{ width: "400px" }}
                value={messages[0] || ""}
                onChange={(e) => handleChange(e.target.value, 0)}
              />
            </Container>

            <Container style={{ marginRight: "10px" }}>
              <label style={{ marginBottom: "10px" }}>
                {data[lang].feedback_message[2]}
              </label>
              <Input
                style={{ width: "400px" }}
                value={messages[1] || ""}
                onChange={(e) => handleChange(e.target.value, 1)}
              />{" "}
            </Container>
          </Container>
          <label style={{ marginBottom: "10px" }}>
            {data[lang].feedback_message[3]}
          </label>

          <Input
            style={{ width: "400px" }}
            value={messages[2] || ""}
            onChange={(e) => handleChange(e.target.value, 2)}
          />
          <Button
            style={{ marginBottom: "30px" }}
            onClick={() => snedEmailToSadna()}
          >
            {data[lang].feedback_button_send}
          </Button>
        </>
      )}
    </Container>
  );
}

const Button = styled.button`
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: #8aca28;
  border-radius: 999px;
  border: none;
  font-size: 1.2rem;
  color: white;
  width: 200px;
  margin-top: 70px;
  &:hover {
    opacity: 0.85;
  }
`;

const Numbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 15px;
  font-size: 25px;
  background-color: lightgrey;

  &::after {
    background-color: green;
    color: #ffffff;
  }
`;

const Line = styled.div`
  border-top: 2px solid lightgray;
  width: 150%;
  margin-bottom: 40px;
`;

// {data[lang].feedback_questions.map((question, id) => (
//              <div>שאלה: </div>
//              <Numbers>
//                <br />
//                <Item
//                  key={id}
//                  style={{
//                    backgroundColor: seleceted === id && "green",
//                    color: seleceted === id && "white",
//                  }}
//                  onClick={() => handleClickOnNumber(10, "שאלה: ", id)}
//                >
//                  10
//                </Item>
//                <Item
//                  key={id + 1}
//                  style={{
//                    backgroundColor: seleceted === id + 1 && "green",
//                    color: seleceted === id + 1 && "white",
//                  }}
//                  onClick={() => handleClickOnNumber(9, "שאלה: ", id + 1)}
//                >
//                  9
//                </Item>{" "}
//                <Item   style={{
//                    backgroundColor: seleceted === id + 2 && "green",
//                    color: seleceted === id + 2 && "white",
//                  }} onClick={() => handleClickOnNumber(8, "שאלה: ", id + 2)}>8</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 3 && "green",
//                    color: seleceted === id + 3 && "white",
//                  }} onClick={() => handleClickOnNumber(7, "שאלה: ", id + 3)}>7</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 4 && "green",
//                    color: seleceted === id + 4 && "white",
//                  }} onClick={() => handleClickOnNumber(6, "שאלה: ", id + 4)}>6</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 5 && "green",
//                    color: seleceted === id + 5 && "white",
//                  }} onClick={() => handleClickOnNumber(6, "שאלה: ", id + 5)}>5</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 6 && "green",
//                    color: seleceted === id + 6 && "white",
//                  }} onClick={() => handleClickOnNumber(6, "שאלה: ", id + 6)}>4</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 7 && "green",
//                    color: seleceted === id + 7 && "white",
//                  }} onClick={() => handleClickOnNumber(6, "שאלה: ", id + 7)}>3</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 8 && "green",
//                    color: seleceted === id + 8 && "white",
//                  }} onClick={() => handleClickOnNumber(6, "שאלה: ", id + 8)}>2</Item>
//                <Item style={{
//                    backgroundColor: seleceted === id + 9 && "green",
//                    color: seleceted === id + 9 && "white",
//                  }} onClick={() => handleClickOnNumber(6, "שאלה: ", id + 9)}>1</Item>
//              </Numbers>
//              <Line />
//           )}
