import { useState } from "react";
import "./App.css";
import { Output } from "./Output.jsx";
import { Input } from "./Input.jsx";

const base_cv = {
    personal: {
        name: "Madeleine",
        email: "madeleine@fakeemail.com",
        tel: "12 3456 7890",
        locale: "Hell, Michigan",
    },
    education: [
        {
            id: crypto.randomUUID(),
            start: "09/2022",
            end: "07/2026",
            locale: "Nowhere, Oklahoma",
            place: "Clown College",
            position: "Bachelors in clownery",
            hidden: true,
        },
    ],
    professional: [
        {
            id: crypto.randomUUID(),
            start: "09/2022",
            end: "07/2026",
            locale: "Nowhere, Oklahoma",
            place: "Freelance clown",
            position: "Clown",
            hidden: true,
        },
    ],
};

function App() {
    let [cv, setCv] = useState(base_cv);
    return (
        <div className="app">
            <Input cv={cv} setCv={setCv} />
            <Output cv={cv} />
        </div>
    );
}

export default App;
