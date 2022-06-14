import {useContext} from "react";
import { ProductrInfo } from "./context/productinfo";
import { UserInfo } from "./context/userinfo";
const HelloLicatFour= () => {
    const {name,price} = useContext(ProductrInfo);
    return (
        <div>
            <h2>{name}</h2>
            <strong>{price}</strong>
        </div>
    )
}

export default HelloLicatFour