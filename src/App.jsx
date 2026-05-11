import "./App.css";

function App() {
    return (
        <>
            <Input />
            <Output />
        </>
    );
}

function Input() {
    return (
        <>
            <DetailsSection />
            <ListSection
                title={"Education"}
                listItems={[{ title: "Random School" }]}
            />
            <ListSection
                title={"Work experience"}
                listItems={[{ title: "Random work" }]}
            />
        </>
    );
}

function DetailsSection() {
    return (
        <>
            <h1>Personal Details</h1>
            <DetailInput legend={"Full name"} value={"Name"} />
            <DetailInput legend={"Email"} value={"Email"} />
            <DetailInput legend={"Phone number"} value={"Number"} />
            <DetailInput legend={"Address"} value={"Somewhere"} />
        </>
    );
}

function ListSection({ title, listItems }) {
    return (
        <div>
            <h1>{title}</h1>
            {listItems.map((l) => (
                <ListItem title={l.title} />
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

function Output({ name, email, tel, address, sections }) {
    return (
        <>
            <header>
                <h1>{name}</h1>
                <div class="contact">
                    <Contact picture={""} text={email} />
                    <Contact picture={""} text={tel} />
                    <Contact picture={""} text={address} />
                </div>
                {sections.map((s) => (
                    <ListOutput section={s} />
                ))}
            </header>
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

function ListOutput(section) {
    return (
        <>
            <header>{section.header}</header>
            {section.items.map((s) => (
                <ListOutputItem section={s} />
            ))}
        </>
    );
}

function ListOutputItem(item) {
    return (
        <>
            <div class="time-and-place">
                <p>
                    {item.fromTime}-{item.toTime}
                </p>
                <p>{item.place}</p>
            </div>
            <h1>{item.loc}</h1>
            <p>{item.position}</p>
            <p>{item.description}</p>
        </>
    );
}

export default App;
