export function Output({ cv }) {
    return (
        <div className="output">
            <header>
                <h1>{cv.personal.name}</h1>
                <div class="contact">
                    <Contact
                        picture={"./src/assets/email.png"}
                        text={cv.personal.email}
                    />
                    <Contact
                        picture={"./src/assets/telephone.png"}
                        text={cv.personal.tel}
                    />
                    <Contact
                        picture={"./src/assets/location.png"}
                        text={cv.personal.locale}
                    />
                </div>
            </header>
            <div className="sections">
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
            </div>
        </div>
    );
}

function Contact({ picture, text }) {
    return (
        <div className="contact-item">
            <img src={picture} alt="" className="icon" />
            <p>{text}</p>
        </div>
    );
}

function ListOutput({ header, section }) {
    return (
        <div className="list-output">
            <h1>{header}</h1>
            {section.map((s) => (
                <ListOutputItem item={s} />
            ))}
        </div>
    );
}

function ListOutputItem({ item }) {
    return (
        <div className="list-output-item">
            <div className="time-and-place">
                <p>
                    {item.start} - {item.end}
                </p>
                <p>{item.locale}</p>
            </div>
            <div className="place-and-position">
                <h2>{item.place}</h2>
                <p>{item.position}</p>
                <p>{item.description}</p>
            </div>
        </div>
    );
}
