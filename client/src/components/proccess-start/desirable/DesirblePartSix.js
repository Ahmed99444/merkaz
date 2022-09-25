import React, { useContext } from "react";

import { UpdateDataContext } from "../../../context/UpdateDataContext";

import MountainSVG from "./MountainSVG";

export default function DesirblePartSix() {
  const [userInfo, , lang] = useContext(UpdateDataContext);

  const { desirblePartThree } = userInfo;
  const { mainGoal } = desirblePartThree || "";

  return (
    <>
      <MountainSVG mainGoal={mainGoal} lang={lang} />
    </>
  );
}
