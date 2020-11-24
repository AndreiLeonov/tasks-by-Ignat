import React from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[]
    valuetext: (value: number) => string
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, valuetext,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    // const onChangeCallback = (value: Array<number>) => {
    //     onChangeRange && onChangeRange(value); // сохраняем старую функциональность
    //     // onChangeRange && onChangeRange(+e.currentTarget.value);
    // }

    // const onChangeCallback = (event: any, newValue: number[]) => {
    //     onChangeRange && onChangeRange(newValue)
    // };
    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };




    return (
        <div style={{width: 600}}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}

export default SuperDoubleRange;
