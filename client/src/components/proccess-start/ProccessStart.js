import React, {
  useEffect,
  useState,
  useContext,
  createRef,
  useCallback,
} from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";
// import { useScreenshot } from "use-react-screenshot";

import { Conatainer } from "../home-page/TheSystem";
import ProccessStartHeader from "./ProccessStartHeader";

import israelLogo from "../../assets/Flag-Israel.jpg";
import britishLogo from "../../assets/United-kingdom_flag.png";
import printLogo from "../../assets/print.png";
import mailLogo from "../../assets/Mail.png";
import arabicLogo from "../../assets/arabic.png";

import page from "./pagesList";
import data from "../../translations/trans";
import { useScreenshot } from "use-screenshot-hook";

// provider
import { UpdateDataContext } from "../../context/UpdateDataContext";

import keys from "../../emailkey";

export default function ProccessStart(props) {
  // const [lang, setLang] = useState("he");
  const [pageNumber, setPageNumber] = useState(0);
  const [updateData, setUpdateData] = useState(false);
  const [showButton, setShowButton] = useState("hidden");
  const [countClick, setCountClick] = useState(0);
  const [print, setPrint] = useState(false);
  const location = useLocation();
  const ref = createRef(null);
  // const [image, takeScreenshot] = useScreenshot(ref.current);
  const [userEmail, setUserEmail] = useState("");
  const [
    isUserSentMailOrDownloadScreenShot,
    setIsUserSentMailOrDownloadScreenShot,
  ] = useState(false);
  const [result, setResult] = useState([]);
  const [mail, setMail] = useState("");
  const { image, takeScreenshot } = useScreenshot();

  const { SECURE_TOKEN } = keys;

  // useEffect(() => {
  //   takeScreenshot(ref.current)
  // }, [ref.current, takeScreenshot])

  useEffect(() => {
    const userContactDeatils = localStorage.getItem("user-contact-details");
    const parseUserContactDeatils =
      userContactDeatils && JSON.parse(userContactDeatils);

    if (parseUserContactDeatils) {
      const [, mail] = parseUserContactDeatils;
      setMail(mail);
    }
  }, []);

  useEffect(() => {
    const resultData = localStorage.getItem("result");
    const parseResult = resultData && JSON.parse(resultData);

    if (parseResult) {
      setResult(parseResult);
    }
  }, []);

  useEffect(() => {
    if (print) {
      window.print();
      setIsUserSentMailOrDownloadScreenShot(true);
    }
  }, [print]);

  useEffect(() => {
    if (
      pageNumber === 71 ||
      pageNumber === 68 ||
      pageNumber === 66 ||
      pageNumber === 65 ||
      pageNumber === 56 ||
      pageNumber === 48 ||
      pageNumber === 47 ||
      pageNumber === 46 ||
      pageNumber === 43 ||
      pageNumber === 36
    ) {
      setShowButton("visible");
    } else {
      setShowButton("hidden");
    }
  }, [pageNumber]);

  const [userInfo, , lang, setLang] = useContext(UpdateDataContext);
  let history = useHistory();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // store the user on local storage
      localStorage.setItem("user", true);
    } else {
      // removes the user from local storage on logOut
      localStorage.removeItem("user");
    }
  });

  const userLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      alert(
        "כדי לחזור לעמוד הקודם או להתקדם לעמוד הבא, יש להשתמש בכפתורים בתחתית העמוד."
      );
    };
  });

  useEffect(() => {
    const data = localStorage.getItem("page-number");
    const parse = data && JSON.parse(data);
    setPageNumber(parse);
  }, []);

  useEffect(() => {
    localStorage.setItem("page-number", JSON.stringify(pageNumber));
  }, [pageNumber]);

  const redirectToHomePage = () => {
    history.push("/");
  };

  const redirectToSingUp = () => {
    history.push("/signup");
  };

  const handlePreviousButton = () => {
    setUpdateData(false);
    if (pageNumber === 0) {
      redirectToHomePage();
      } else if (
        pageNumber === 12 ||
        pageNumber === 17 ||
        pageNumber === 22 ||
        pageNumber === 26 ||
        pageNumber === 31 ||
        pageNumber === 40 ||
        pageNumber === 43 ||
        pageNumber === 53 ||
        pageNumber === 61
      ) {
        alert(`
            אין באפשרותך לחזור לאחור, אנא המשך לדף הבא.

            **שים לב, לאחר מעבר לשלב הבא (כל שלב מורכב ממספר שקופיות), לא תהיה אפשרות לחזור לאחור**
            `);
    } else {
      setPageNumber((pageNumber) => pageNumber - 1);
    }
  };

  const excutePrintAction = () => {
    !print ? setPrint(true) : setPrint(false);
  };

  const handleNextButton = () => {
    setUpdateData(true);
    if (pageNumber === page.length - 1) {
      alert("כל הכבוד, סיימת את הסדנה!");
    } else if (pageNumber === 12) {
      // check if user choose 20 needs
      const arrOfNeeds =
        userInfo.needIdentification.userNeeds &&
        userInfo.needIdentification.userNeeds;
      arrOfNeeds.length !== 20
        ? alert("כדי לעבור לשלב הבא, אנא בחר 20 צרכים")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 13) {
      // check if user choose 5-8 needs
      const arrOfNeedsPartTwo =
        userInfo.needIdentificationPartTwo.userNeedsPartTwo &&
        userInfo.needIdentificationPartTwo.userNeedsPartTwo;

      arrOfNeedsPartTwo.length <= 8 && arrOfNeedsPartTwo.length >= 5
        ? setPageNumber((pageNumber) => pageNumber + 1)
        : alert("כדי לעבור לשלב הבא, אנא בחר בין 5-8 צרכים");
    } else if (pageNumber === 19) {
      // check if user choose 20 actions
      const arrOfActions =
        userInfo.actionsToSuccess.userActions &&
        userInfo.actionsToSuccess.userActions;

      arrOfActions.length !== 10
        ? alert("כדי לעבור לשלב הבא, אנא בחר 10 פעולות")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 20) {
      // check if user choose 5 actions
      const arrOfActions =
        userInfo.actionToSuccessPartTwo.userActionsPartTwo &&
        userInfo.actionToSuccessPartTwo.userActionsPartTwo;

      arrOfActions.length !== 5
        ? alert("כדי לעבור לשלב הבא, אנא בחר 5 פעולות")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 23) {
      // check if user choose 5 actions
      const arrOfActions =
        userInfo.strategyValuesPartOne.userValues &&
        userInfo.strategyValuesPartOne.userValues;

      arrOfActions.length !== 10
        ? alert("כדי לעבור לשלב הבא, אנא בחר 10 ערכים")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 25) {
      // check if user choose 5 actions
      const arrChoises =
        userInfo.strategyValuesPartThree.chosen &&
        userInfo.strategyValuesPartThree.chosen;

      arrChoises.length !== 5
        ? alert(
            "אין באפשרותך לסמן יותר מחמישה ערכים, נא לסמן את החמישה המרכזיים."
          )
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 26) {
      // check if user choose 2-4 values
      const arr =
        userInfo.ethicsPartOne.userValues && userInfo.ethicsPartOne.userValues;

      arr.length < 2 || arr.length > 4
        ? alert("כדי לעבור לשלב הבא, אנא בחר 2-4 ערכים")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 28) {
      // check if user choose at least 4 values
      const arr =
        userInfo.worldview_part_one.options &&
        userInfo.worldview_part_one.options;

      arr.length < 5
        ? alert("כדי לעבור לשלב הבא, אנא בחר לפחות 5 משפטים")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 30) {
      // check if user choose 2 values
      const arr =
        userInfo.worldview_part_three.sentences &&
        userInfo.worldview_part_three.sentences;

      arr.length !== 2
        ? alert("כדי לעבור לשלב הבא, אנא בחר 2 משפטים")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 36) {
      // check if user sent mail or download screenshot
      isUserSentMailOrDownloadScreenShot
        ? setPageNumber((pageNumber) => pageNumber + 1)
        : alert(data[lang].sent_print_customer_email);
    } else if (pageNumber === 37) {
      // check if user fill all table
      const arr = userInfo.ValvesOfLife.result || result;
      // const filterNull =
      //   arr &&
      //   arr.filter((item) => {
      //     return typeof item === "object" || (item && Object.values(item) > 0);
      //   });
      // console.log(
      //   `arr: ${arr}, filter null: ${filterNull}, length: ${filterNull.length}`
      // );
      const filterNums = arr.filter((num) => num > 0);
      console.log(`arr length: ${filterNums.length}, arr: ${filterNums}`);
      filterNums.length !== 10
        ? alert("כדי לעבור לשלב הבא, אנא בחר 10 שורות")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 42) {
      // check if user pick 3-5 values
      const arr =
        userInfo.main_strengths.strengths && userInfo.main_strengths.strengths;
      arr < 3 || arr > 5
        ? alert("כדי לעבור לשלב הבא, אנא בחר 3-5 ערכים")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else if (pageNumber === 48) {
      // check if user sent mail or download screenshot
      console.log("isUserSentMailOrDownloadScreenShot: ", isUserSentMailOrDownloadScreenShot)
      isUserSentMailOrDownloadScreenShot
        ? setPageNumber((pageNumber) => pageNumber + 1)
        : alert(data[lang].sent_print_customer_email);
    } else if (pageNumber === 56) {
      // check if user sent mail or download screenshot
      isUserSentMailOrDownloadScreenShot
        ? setPageNumber((pageNumber) => pageNumber + 1)
        : alert(data[lang].sent_print_customer_email);
    } else if (pageNumber === 65) {
      // check if user sent mail or download screenshot
      isUserSentMailOrDownloadScreenShot
        ? setPageNumber((pageNumber) => pageNumber + 1)
        : alert(data[lang].sent_print_customer_email);
    } else if (pageNumber === 69) {
      // check if user choose 2-4 values
      const { feedback } = userInfo;
      const { feedbackSent } = feedback;
      console.log("feedbackSent: ", feedbackSent);
      !feedbackSent
        ? alert("כדי לעבור לשלב הבא, אנא מלא ושלח את המשוב.")
        : setPageNumber((pageNumber) => pageNumber + 1);
    } else {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };

  const getImage = () => {
    takeScreenshot();
    handleSendEmail();
  };

  // const checkIfImageExist = () => {
  //   image ? handleSendEmail() : handleSendEmail();
  // };

  const handleSendEmail = useCallback(() => {
    let getEmail;

    console.log("image: ", image);
    window.Email.send({
      SecureToken: SECURE_TOKEN,
      To: userEmail || mail,
      From: "hrchagshama@gmail.com",
      Subject: "הודעה מ-HRC",
      Body: `
              שלום, 
              <br/>
              מצ''ב הקובץ שלך. אתה מוזמן לשמור אותו ואו לשתף עם חברים/משפחה.
              <br/>
              בברכה,
              <br/>
              מרכז הגשמה
          `,
      Attachments: [
        {
          name: "screenshot.png",
          data: image,
        },
      ],
    }).then((message) => console.log(message));

    setIsUserSentMailOrDownloadScreenShot(true);
  }, [SECURE_TOKEN, image, mail, userEmail]);

  useEffect(() => {
    handleSendEmail();
  }, [handleSendEmail, image]);

  firebase.auth().currentUser !== null &&
    pageNumber === undefined &&
    setPageNumber(0);
  // remove comment before production - removed
  return userLocal ? (
    //- remove before development stage
    // return (
    <div>
      <ProccessStartHeader lang={lang} pageName={page[pageNumber].pageName} />
      <Conatainer
        style={{
          height: "1045px",
          overflow: "auto",
        }}
        ref={ref}
      >
        {page[pageNumber].component}
      </Conatainer>
      <Nav>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: "auto",
          }}
        >
          <p style={{ color: "white", fontSize: "1.1rem", marginLeft: "30px" }}>
            {data[lang].copy_rights}{" "}
          </p>
          {/* <LanguageContainer style={{ marginLeft: "10px" }}>
            <ChnageLang onClick={() => setLang("en")}>
              <Image src={britishLogo} />
              <div style={{ color: "white" }}>English</div>
            </ChnageLang>
          </LanguageContainer> */}
          <LanguageContainer>
            <ChnageLang onClick={() => setLang("he")}>
              <Image src={israelLogo} />
              <div style={{ color: "white" }}>עברית</div>
            </ChnageLang>
          </LanguageContainer>
          {/* <LanguageContainer style={{marginRight: "15px"}}>
            <ChnageLang onClick={() => setLang("arb")}>
              <Image style={{height: "40px", width: "37px"}} src={arabicLogo} />
              <div style={{ color: "white", marginTop: "-5px" }}>العربية</div>
            </ChnageLang>
          </LanguageContainer> */}
          <PrintAndDownload style={{ visibility: showButton }}>
            <Image src={printLogo} alt="print" onClick={excutePrintAction} />
            <div style={{ color: "white" }}>הדפס</div>{" "}
          </PrintAndDownload>
          <PrintAndDownload style={{ visibility: showButton }}>
            <Image src={mailLogo} alt="mail" onClick={getImage} />
            <div style={{ color: "white" }}>שלח למייל שלי</div>{" "}
          </PrintAndDownload>
        </div>
        <div
          style={{
            color: "white",
            fontSize: "2.2rem",
            fontWeight: "bold",
            alignSelf: "center",
            marginLeft: "250px",
          }}
        >
          {pageNumber}
        </div>
        <div style={{ visibility: props.hidden }}>
          <Button onClick={handlePreviousButton}>
            {data[lang].button_previous}
          </Button>
          <Button onClick={handleNextButton}>{data[lang].button_next}</Button>{" "}
        </div>
      </Nav>
    </div>
  ) : (
    // );
    // remove comment before production - removed
    <>{redirectToSingUp()}</>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #4595d5ff;
  padding: 1rem;
  position: relative;
  bottom: 0%;
  overflow: auto;
  height: auto;
`;

const Button = styled.button`
  background-color: #84c128ff;
  color: white;
  padding: 0.4rem;
  width: 150px;
  height: 50px;
  border-radius: 999px;
  font-size: 20px;
  cursor: pointer;
  border: 3px solid white;
  margin-left: 50px;
  &:hover {
    opacity: 0.85;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const ChnageLang = styled.div`
  color: "white";
`;

const PrintAndDownload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 30px;
`;
