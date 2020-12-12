import React from "react"
import Card from "../../../components/card"
import SdmImage from "../../../images/sdm.png"

export default () => {
  return (
    <>
      <h1>Sdm Masts</h1>
      <ul>
        <li>
          <Card
            target={"/masts/sdm/sdm"}
            text={"sdm"}
            imgSource={SdmImage}
          />
        </li>
      </ul>
    </>
  )
}

