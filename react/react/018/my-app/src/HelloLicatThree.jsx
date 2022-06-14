import {useContext} from "react";
import { DarkMode } from "./context/darkmode";
import { UserInfo } from "./context/userinfo";
import HelloLicatFour from "./HelloLicatFour";
const HelloLicatThree = () => {
    const {mode} = useContext(DarkMode);
    return (
        <div>
            <h2>{mode+''}</h2>
            <HelloLicatFour />
        </div>
    )
}

export default HelloLicatThree