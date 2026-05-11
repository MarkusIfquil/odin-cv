export function Output({ cv }) {
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
            {cv.education.length ? (
                <ListOutput header="Education" section={cv.education} />
            ) : (
                ""
            )}
            {cv.professional.length ? (
                <ListOutput
                    header="Professional Experience"
                    section={cv.professional}
                />
            ) : (
                ""
            )}
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
            <h1>{header}</h1>
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
            <h2>{item.place}</h2>
            <p>{item.position}</p>
        </>
    );
}
