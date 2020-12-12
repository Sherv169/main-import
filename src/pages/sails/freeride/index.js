import React from "react"
import Card from "../../../components/card"
import BansheeImage from "../../../images/banshee.png"

export default () => {
  return (
    <>
      <h1>Freestyle sails</h1>
      <ul>
        <li>
          <Card
            target={"/sails/freeride/banshee"}
            text={"Banshee"}
            imgSource={BansheeImage}
          />
        </li>
      </ul>
    </>
  )
}
