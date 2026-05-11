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
                id: crypto.randomUUID(),
                start: "09/2022",
                end: "07/2026",
                locale: "Nowhere, Oklahoma",
                place: "Clown College",
                position: "Bachelors in clownery",
                hidden: false,
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
                hidden: false,
            },
        ],
    });
    return (
        <>
            <Input cv={cv} setCv={setCv} />
            <Output cv={cv} />
        </>
    );
}

function Input({ cv, setCv }) {
    return (
        <>
            <DetailsSection personal={cv.personal} setCv={setCv} />
            <ListSection
                title={"Education"}
                items={cv.education}
                setCv={setCv}
                field={"education"}
            />
            <ListSection
                title={"Work experience"}
                items={cv.professional}
                setCv={setCv}
                field={"professional"}
            />
        </>
    );
}

function DetailsSection({ personal, setCv }) {
    function updatePersonal(field, value) {
        setCv((prev) => ({
            ...prev,
            personal: { ...prev.personal, [field]: value },
        }));
    }
    return (
        <>
            <h1>Personal Details</h1>
            <DetailInput
                legend={"Full name"}
                value={personal.name}
                onChange={(e) => updatePersonal("name", e.target.value)}
            />
            <DetailInput
                legend={"Email"}
                value={personal.email}
                onChange={(e) => updatePersonal("email", e.target.value)}
            />
            <DetailInput
                legend={"Phone number"}
                value={personal.tel}
                onChange={(e) => updatePersonal("tel", e.target.value)}
            />
            <DetailInput
                legend={"Address"}
                value={personal.locale}
                onChange={(e) => updatePersonal("locale", e.target.value)}
            />
        </>
    );
}

function ListSection({ title, items, setCv, field }) {
    function unhideEdit(key, field) {
        setCv((prev) => ({
            ...prev,
            [field]: prev[field].map((item) => {
                return item.id === key
                    ? { ...item, hidden: !item.hidden }
                    : item;
            }),
        }));
    }
    return (
        <div>
            <h1>{title}</h1>
            {items.map((l) => {
                return !l.hidden ? (
                    <ListItem
                        title={l.place}
                        unhide={unhideEdit}
                        key={l.id}
                        id={l.id}
                        field={field}
                    />
                ) : (
                    <ListItemEdit
                        educationItem={l}
                        setCv={setCv}
                        unhide={unhideEdit}
                        key={l.id}
                        id={l.id}
                        field={field}
                    />
                );
            })}
            <button type="">+ {title}</button>
        </div>
    );
}

function ListItem({ title, unhide, id, field }) {
    return (
        <div>
            <h1>{title}</h1>
            <button
                type=""
                onClick={(e) => {
                    unhide(id, field);
                }}
            >
                -
            </button>
        </div>
    );
}

function ListItemEdit({ educationItem, unhide, setCv, id, field }) {
    function eduEdit(field, value) {
        setCv((prev) => ({
            ...prev,
            education: prev.education.map((item) =>
                item.id === id ? { ...item, [field]: value } : item,
            ),
        }));
    }
    return (
        <>
            <input
                type=""
                name=""
                value={educationItem.start}
                onChange={(e) => eduEdit("start", e.target.value)}
            />
            <input
                type=""
                name=""
                value={educationItem.end}
                onChange={(e) => eduEdit("end", e.target.value)}
            />
            <input
                type=""
                name=""
                value={educationItem.locale}
                onChange={(e) => eduEdit("locale", e.target.value)}
            />
            <input
                type=""
                name=""
                value={educationItem.place}
                onChange={(e) => eduEdit("place", e.target.value)}
            />
            <input
                type=""
                name=""
                value={educationItem.position}
                onChange={(e) => eduEdit("position", e.target.value)}
            />
            <button type="" onClick={(_) => unhide(id, field)}>
                -
            </button>
        </>
    );
}

function DetailInput({ legend, value, onChange }) {
    return (
        <>
            <legend>{legend}</legend>
            <input type="" name="" value={value} onChange={onChange} />
        </>
    );
}

function Output({ cv }) {
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
