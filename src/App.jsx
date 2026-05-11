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
            <ListSection title={"Education"} listItems={[{ title: "AAA" }]} />
            <ListSection
                title={"Work experience"}
                listItems={[{ title: "AAA" }]}
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

function Output({ title, email, tel, address, sections }) {
    return (
        <>
            <header>
                <h1>{title}</h1>
                <div class="contact">
                    <Contact picture={""} text={email} />
                    <Contact picture={""} text={tel} />
                    <Contact picture={""} text={address} />
                </div>
                {sections}
            </header>
        </>
    );
}

function Contact() {}

function ListInput() {}

function ListOutputItem() {}

function ListOutput({ headerText, sections }) {
    return (
        <>
            <header>{headerText}</header>
            {sections.map((s) => (
                <ListOutputItem section={s} />
            ))}
        </>
    );
}

export default App;
