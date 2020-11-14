import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
    {_id: 6, name: "Яна", age: 19},
    {_id: 7, name: "Багдан", age: 22},
    {_id: 8, name: "Виталий", age: 16},
]

export type initialPeopleType = {
    _id: number
    name: string
    age: number
}

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            имя: {p.name}, возраст: {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sortUp", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sortDown", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "checkAge", payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>

            {finalPeople}
            <div><SuperButton onClick={sortUp}>Сортировка в алфавитном порядке (от А до Я)</SuperButton></div>
            <div><SuperButton onClick={sortDown}>Сортировка в обратном алфавитном порядке (от Я до А)</SuperButton></div>
            <div><SuperButton onClick={checkAge}>Отфильтровать по возрасту (18+)</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
