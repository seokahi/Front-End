import { useSelector, useDispatch } from 'react-redux';
import { addNumber, substractNumber } from '../modules/goodsCounter';

function GoodsCounter(){

    // useSelector : store의 상태 조회 Hook
    const { stock, goods } = useSelector(state => ({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods
    }));
    console.log(stock, goods);

    // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
    const dispatch = useDispatch();

    const onAddNumber = () => dispatch(addNumber());
    const onSubstractNumber = () =>{ if(!(goods<=0))dispatch(substractNumber())};

    return (
        <div>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span>
                <strong>17,500</strong>원
            </span>
            <div id="counter-box">
                <button type="button" id="minus" onClick={onSubstractNumber}>
                MINUS
                </button>
                <span id="number">{goods}</span>
                <button id="plus" onClick={onAddNumber}>
                PLUS
                </button>
            </div>
            <div>
                총 수량 <strong id="quantity">{goods}</strong>
            </div>
            <div>
                <strong id="total">{goods * 17500}</strong>원
            </div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div>
    )
}

export default GoodsCounter;