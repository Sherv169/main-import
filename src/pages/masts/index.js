import React from 'react'
import Card from "../../components/card"
import RdmImage from "../../images/rdm.png"
import SdmImage from "../../images/sdm.png"

export default () => {
    return (
        <div>
            <h1>Masts</h1>
            <ul>
                <li>
                    <Card target={"/masts/rdm"} text={"Rdm"} imgSource={RdmImage} />
                </li>
                <li>
                    <Card target={"/masts/sdm"} text={"Sdm"} imgSource={SdmImage} />
                </li>
            </ul>
        </div>
    )
}

