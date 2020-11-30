import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import { changeThemeC } from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark-theme', 'red-theme', 'lightgreen-theme', 'black-theme', 'gold-theme'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.theme.theme)
    const dispatch = useDispatch();
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                onChangeOption={onChangeCallback}
                options={themes}
                value={theme}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
