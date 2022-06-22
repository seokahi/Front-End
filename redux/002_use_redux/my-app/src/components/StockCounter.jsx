import {useSelector, useDispatch} from "react-redux"
import { sale, soldout } from '../modules/stockCounter';
import React, { useEffect, useState } from "react";
function StockCounter() {
     // useSelector : store의 상태 조회 Hook
     const { message,stock } = useSelector(state => ({
        message: state.stockReducer.message,
        stock: state.goodsReducer.stock,
    }));
    console.log(message);

    // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
    const dispatch = useDispatch();

    const onSale = () => dispatch(sale());
    const onSoldout = () => dispatch(soldout());

    useEffect(() => {
        if (stock <= 0) {
            onSoldout()
        }
        else {
            onSale();
        }
    }, [stock]);

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default StockCounter