
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { increaseAction } from "../Redux/Action/Increase";
import { INCR_EASE } from "../Redux/Action/Increase";
import { DECREASE } from "../Redux/Action/Decrease";
import { DecreaseAction } from "../Redux/Action/Decrease";
export const Count = () => {

    const dispatch = useDispatch();
    const count = useSelector(store => store.IncreaseReducer.count);


    console.log(count)
    return (
        <>
        <div>{count}</div>
        <button onClick={() => dispatch(increaseAction({type: INCR_EASE,
        payload:1}))}>Increase</button>
        <button onClick={() => dispatch(DecreaseAction({type: DECREASE,
        payload:1}))}>Decrease</button>
        </>
    )
}