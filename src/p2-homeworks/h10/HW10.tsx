import React from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, initStateType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import clockLoading from "./Clock-Loading.gif"

function HW10() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, initStateType>(state => state.loading)
    const loading = isLoading.loading;


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout( ( )=> {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={clockLoading} alt="Загрузка. Пожалуйста подождите" /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
