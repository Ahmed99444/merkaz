import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import rightLogo from "../../../assets/LOGO TRANS.png";
import leftLogo from "../../../assets/דמוניות.jpeg";

import data from "../../../translations/trans";
import { Grid } from "../../home-page/About";
import { UpdateDataContext } from "../../../context/UpdateDataContext";

export default function MyLifeXray({ downloadPdf }) {
  const [userInfo, ,] = useContext(UpdateDataContext);
  const [userNeeds, setUserNeeds] = useState([]);
  const [actionToSuccess, setActionToSuccess] = useState([]);
  const [userOverlappingValues, setUserOverlappingValues] = useState([]);
  const [userEthicsValues, setUserEthicsValues] = useState([]);
  const [userWorldViewData, setUserWorldViewData] = useState([]);
  const [occupationsLife, setOccupationsLife] = useState([]);
  const [userValves, setUserValves] = useState([]);
  const [userStrengths, setUserStrengths] = useState([]);

  useEffect(() => {
    console.log("userOverlappingValues: ", userOverlappingValues)
  }, [userOverlappingValues])

  const { needIdentificationPartTwo } = userInfo;
  const { userNeedsPartTwo } = needIdentificationPartTwo || [];

  // action to success
  const { actionToSuccessPartTwo } = userInfo;
  const { userActionsPartTwo } = actionToSuccessPartTwo || [];

  // // strategy needs
  // const { strategyValuesPartThree } = userInfo;
  // const { overlappingValues } = strategyValuesPartThree || [];

  // // ethics code
  // const { ethicsPartOne } = userInfo;
  // const { userValues } = ethicsPartOne || [];

  // world point of view
  const { worldview_part_one } = userInfo;
  const { options } = worldview_part_one || [];
  if (options) {
    options.length = 5;
  }

  // occuptions life
  const { occupationsLifePartTwo } = userInfo;
  const { onHitList } = occupationsLifePartTwo || [];

  // valves of life
  const { ValvesOfLifePartTwo } = userInfo;
  const { sortedSum } = ValvesOfLifePartTwo || [];

  // strengths
  const { strengths_table } = userInfo;
  const { arrOfStrengths } = strengths_table || [];

  useEffect(() => {
    const data = localStorage.getItem("user-data-needs-part-two");
    const parse = JSON.parse(data);

    if (parse) {
      parse.length = 5;
      setUserNeeds(parse);
    } else {
      userNeedsPartTwo.length = 5;
      setUserNeeds(userNeedsPartTwo);
    }

    const userActionsData = localStorage.getItem(
      "action-to-success-part-one-data"
    );
    const parseUserActionsData = userActionsData && JSON.parse(userActionsData);

    if (parseUserActionsData) {
      parseUserActionsData.length = 5;
      setActionToSuccess([...parseUserActionsData]);
    } else {
      userActionsPartTwo.length = 5;
      setActionToSuccess([...userActionsPartTwo]);
    }

    const data_chossen = localStorage.getItem("overlappingValues");
    const parse_chossen = data && JSON.parse(data_chossen);

    if (parse_chossen) {
      parse_chossen.length = 5;
      setUserOverlappingValues(parse_chossen);
    }

    const ethicsData = localStorage.getItem("ethics-part-one-data");
    const parseEthicsData = JSON.parse(ethicsData);

    if (parseEthicsData) {
      parseEthicsData.length = 4;
      setUserEthicsValues(parseEthicsData);
    } else {
      setUserEthicsValues(options);
    }

    const worldViewData = localStorage.getItem("worldview-part-one");
    const parseWorldViewData = worldViewData && JSON.parse(worldViewData);

    if (parseWorldViewData) {
      parseWorldViewData.length = 4;
      setUserWorldViewData(parseWorldViewData);
    }

    const dataOccupationsLifePartTwo = localStorage.getItem(
      "occupationsLifePartTwo-hitlist"
    );
    const parseDataOccupationsLifePartTwo =
      data && JSON.parse(dataOccupationsLifePartTwo);

    if (parseDataOccupationsLifePartTwo) {
      parseDataOccupationsLifePartTwo.length = 6;
      setOccupationsLife(parseDataOccupationsLifePartTwo);
    } else {
      setOccupationsLife(onHitList);
    }

    const sumData = localStorage.getItem("sum");
    const parseSum = sumData ? JSON.parse(sumData) : sortedSum;
    const valves = parseSum 

    if (parseSum) {
     const sortedSum = valves.sort((a, b) => {
      
        if (a.value === b.value) return 0;
        return a.value < b.value ? 1 : -1;
      });
      sortedSum.length = 6
      setUserValves(sortedSum);
    }

    const arrData = localStorage.getItem("arr-strengths");
    const parseArr = arrData && JSON.parse(arrData);
    const strengts =
      parseArr &&
      parseArr.map((item, id) => {
        const a = Object.keys(parseArr[id]);
        return a;
      });
    const removeDuplicatesFromStrengths = [
      ...new Set(strengts.map((item) => item[0])),
    ];
    console.log(
      "removeDuplicatesFromStrengths: ",
      removeDuplicatesFromStrengths
    );
    if (removeDuplicatesFromStrengths) {
      const arr = [
        removeDuplicatesFromStrengths[1],
        removeDuplicatesFromStrengths[2],
        removeDuplicatesFromStrengths[3],
        removeDuplicatesFromStrengths[4],
        removeDuplicatesFromStrengths[5],
        removeDuplicatesFromStrengths[6],
      ];
      setUserStrengths(arr);
    }
  }, [onHitList, options, sortedSum, userActionsPartTwo, userNeedsPartTwo]);

  return (
    <Container>
      <Header>
        <RightLogo src={rightLogo} />
        <LogoContainer>
          <div style={{ fontSize: "20px", width: "50%" }}>
            <p style={{ color: "#5f6062ff", fontWeight: "bold" }}>
              {/* page title */}
            </p>
          </div>
        </LogoContainer>
        <LeftLogo src={leftLogo} />
      </Header>
      <Container style={{ marginTop: "50px", flexDirection: "row" }}>
        <Title>רנטגן</Title>
        <Title>החיים</Title>
        <Title>שלי</Title>
      </Container>
      <Container style={{ marginTop: "50px", flexDirection: "row" }}>
        <SubTitle>דע</SubTitle> <SubTitle>את</SubTitle>
        <SubTitle>עצמך</SubTitle>
      </Container>
      <Container style={{ flexDirection: "row", marginRight: "35px" }}>
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#4faddf" }}>
            &nbsp;הצרכים שלי
          </TableTitle>
          {userNeeds &&
            userNeeds.map((need, id) => (
              <Cell>
                {" "}
                <Text>
                  <span>{id + 1}</span>&nbsp;{" "}
                  {need.replace(/\s/g, "\u00a0") || ""}
                </Text>
              </Cell>
            ))}
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#4faddf" }}>
            דרכי&nbsp;הפעולה&nbsp;שלי&nbsp;להצלחה
          </TableTitle>
          {actionToSuccess &&
            actionToSuccess.map((action, id) => (
              <Cell>
                {" "}
                <Text>
                  <span>{id + 1}</span>&nbsp; {action}
                </Text>
              </Cell>
            ))}
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#4faddf" }}>
            האסטרטגיה&nbsp;החיצונית&nbsp;שלי
          </TableTitle>
          {userOverlappingValues &&
            userOverlappingValues.map((value, id) => (
              <Cell>
                <Text>
                  <span>{id + 1}</span>&nbsp;{" "}
                  {value.toString().replace(/\s/g, "\u00a0")}
                </Text>
              </Cell>
            ))}
        </div>
      </Container>

      {/*two tables of my ethnic code and world point of view */}

      <Container
        style={{ flexDirection: "row", marginRight: "35px", marginTop: "50px" }}
      >
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#8aca28" }}>
            &nbsp;הקוד האתי &nbsp;שלי
          </TableTitle>
          {userEthicsValues &&
            userEthicsValues.map((ethicCode, id) => (
              <Cell style={{ width: "500px" }}>
                <Text>
                  <span>{id + 1}</span>&nbsp;{" "}
                  {ethicCode.toString().replace(/\s/g, "\u00a0")}
                </Text>
              </Cell>
            ))}
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#8aca28" }}>
            תפיסות&nbsp;העולם&nbsp;שלי
          </TableTitle>
          {userWorldViewData &&
            userWorldViewData.map((pointOfView, id) => (
              <Cell style={{ width: "500px" }}>
                <Text>
                  <span>{id + 1}</span>&nbsp;{" "}
                  {pointOfView.toString().replace(/\s/g, "\u00a0")}
                </Text>
              </Cell>
            ))}
        </div>
      </Container>
      <Container
        style={{ flexDirection: "row", marginRight: "35px", marginTop: "50px" }}
      >
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#f08c13" }}>
            &nbsp;עיסוקי החיים
          </TableTitle>
          {occupationsLife &&
            occupationsLife.map((occupations, id) => (
              <Cell>
                <Text>
                  <span>{id + 1}</span>&nbsp;{" "}
                  {occupations.toString().replace(/\s/g, "\u00a0") || ""}
                </Text>
              </Cell>
            ))}
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#f08c13" }}>
            &nbsp;שסתומי החיים
          </TableTitle>
          {userValves &&
            userValves.map((valve, id) => (
              <Cell>
                <Text>
                  <span>{id + 1}</span>&nbsp;{" "}
                  {valve.name[0].toString().replace(/\s/g, "\u00a0")}
                </Text>
              </Cell>
            ))}
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TableTitle style={{ backgroundColor: "#f08c13" }}>
            &nbsp;חוזקות החיים
          </TableTitle>
          {userStrengths &&
            userStrengths.map(
              (strengths, id) => (
                <Cell>
                  <Text>
                    <span>{id + 1}</span>&nbsp;{" "}
                    {strengths.toString().replaceAll(/(\s|-)/g, "\u00a0") || ""}
                  </Text>
                </Cell>
              ),
              1
            )}
        </div>
      </Container>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: white;
  margin-bottom: -70px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const RightLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px;
`;

const LeftLogo = styled.img`
  width: 160px;
  height: 100px;
  margin-left: auto;
  margin-top: 5px;
  margin: 15px;
`;

const Title = styled.h1`
  margin-right: 10px;
`;

const SubTitle = styled.h1`
  margin-right: 10px;
  color: #f08c13;
  font-family: italic;
  letter-spacing: 5px;
  font-weight: 700;
`;

const TableTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  padding: 1rem;
`;

const Cell = styled.div`
  background-color: #e9e9e9;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 5px;
  height: 50px;
  width: 400px;
  display: block;
  text-align: right;
`;

const Text = styled.div`
  padding: 10px;
  margin-right: 10px;
`;
