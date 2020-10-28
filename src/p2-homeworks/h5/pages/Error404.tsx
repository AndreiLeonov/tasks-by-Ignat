import React from "react";
import style from './Error404.module.css';

function Error404() {
    return (
        <div className={style.error}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;


// <div className={s.error}>
//     <div className={s.error404}>404</div>
//     <div className={s.text}>Page not found!</div>
//     <div className={s.emoji}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
// </div>