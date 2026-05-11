import { useState } from "react";
import "./App.css";

function App() {
    let [cv, setCv] = useState({
        personal: {
            name: "Madeleine",
            email: "madeleine@fakeemail.com",
            tel: "12 3456 7890",
            locale: "Hell, Michigan",
        },
        education: [
            {
                start: "09/2022",
                end: "07/2026",
                locale: "Nowhere, Oklahoma",
                place: "Clown College",
                position: "Bachelors in clownery",
            },
        ],
        professional: [
            {
                start: "09/2022",
                end: "07/2026",
                locale: "Nowhere, Oklahoma",
                place: "Freelance clown",
                position: "Clown",
            },
        ],
    });
    return (
        <>
            <Input cv={cv} setCv={setCv} />
            <Output cv={cv} setCv={setCv} />
        </>
    );
}

function Input({ cv, setCv }) {
    return (
        <>
            <DetailsSection personal={cv.personal} />
            <ListSection title={"Education"} items={cv.education} />
            <ListSection title={"Work experience"} items={cv.professional} />
        </>
    );
}

function DetailsSection({ personal }) {
    return (
        <>
            <h1>Personal Details</h1>
            <DetailInput legend={"Full name"} value={personal.name} />
            <DetailInput legend={"Email"} value={personal.email} />
            <DetailInput legend={"Phone number"} value={personal.tel} />
            <DetailInput legend={"Address"} value={personal.locale} />
        </>
    );
}

function ListSection({ title, items }) {
    return (
        <div>
            <h1>{title}</h1>
            {items.map((l) => (
                <ListItem title={l.place} />
            ))}
        </div>
    );
}

function ListItem({ title }) {
    return (
        <div>
            <h1>{title}</h1>
            <button type="">-</button>
        </div>
    );
}

function DetailInput({ legend, value }) {
    return (
        <>
            <legend>{legend}</legend>
            <input type="" name="" value={value} />
        </>
    );
}

function Output({ cv, setCv }) {
    return (
        <>
            <header>
                <h1>{cv.personal.name}</h1>
                <div class="contact">
                    <Contact picture={""} text={cv.personal.email} />
                    <Contact picture={""} text={cv.personal.tel} />
                    <Contact picture={""} text={cv.personal.locale} />
                </div>
            </header>
            <ListOutput header="Education" section={cv.education} />
            <ListOutput
                header="Professional Experience"
                section={cv.professional}
            />
        </>
    );
}

function Contact({ picture, text }) {
    return (
        <>
            <img src={picture} alt="" />
            <p>{text}</p>
        </>
    );
}

function ListOutput({ header, section }) {
    return (
        <>
            <header>{header}</header>
            {section.map((s) => (
                <ListOutputItem item={s} />
            ))}
        </>
    );
}

function ListOutputItem({ item }) {
    return (
        <>
            <div class="time-and-place">
                <p>
                    {item.start}-{item.end}
                </p>
                <p>{item.locale}</p>
            </div>
            <h1>{item.place}</h1>
            <p>{item.position}</p>
        </>
    );
}

export default App;
