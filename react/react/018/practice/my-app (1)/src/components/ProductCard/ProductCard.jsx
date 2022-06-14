import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'
import "./productCard.css"
import {useRef} from "react";
export default function ProductCard({productName, price, thumbnailImg}){
    const likeBtn= useRef();
    function handlelikeClick(e) {
        e.currentTarget.classList.toggle("on");
    }
    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button className="like-btn" ref={likeBtn} onClick={handlelikeClick}></button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
