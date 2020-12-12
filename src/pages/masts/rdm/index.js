import React from "react"
import Card from "../../../components/card"
import RdmImage from "../../../images/rdm.png"

export default () => {
  return (
    <>
      <h1>Rdm Mast</h1>
      <ul>
        <li>
          <Card
            target={"/masts/rdm/rdm"}
            text={"Rdm"}
            imgSource={RdmImage}
          />
        </li>
      </ul>
    </>
  )
}
