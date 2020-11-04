import React from "react";
import style from './Error404.module.css';
import error from '../img/error-404.jpg'

function Error404() {

    return (
        <div className={style.error}>
            {/*<div>404</div>*/}
            {/*<div>Page not found!</div>*/}
            {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
            <img src={error} alt="error"/>
        </div>
    );
}

export default Error404;


// <div className={s.error}>
//     <div className={s.error404}>404</div>
//     <div className={s.text}>Page not found!</div>
//     <div className={s.emoji}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
// </div>