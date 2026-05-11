export function Input({ cv, setCv }) {
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
    function addItem() {
        setCv((prev) => ({
            ...prev,
            [field]: prev[field].concat([
                {
                    id: crypto.randomUUID(),
                    start: "",
                    end: "",
                    locale: "",
                    place: "",
                    position: "",
                    hidden: true,
                },
            ]),
        }));
    }
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
                        listItem={l}
                        setCv={setCv}
                        unhide={unhideEdit}
                        key={l.id}
                        id={l.id}
                        section={field}
                    />
                );
            })}
            <button type="" onClick={(_) => addItem()}>
                + {title}
            </button>
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

function ListItemEdit({ listItem, unhide, setCv, id, section }) {
    function editItem(field, value) {
        setCv((prev) => ({
            ...prev,
            [section]: prev[section].map((item) =>
                item.id === id ? { ...item, [field]: value } : item,
            ),
        }));
    }
    function deleteItem() {
        setCv((prev) => ({
            ...prev,
            [section]: prev[section].filter((i) => i.id !== id),
        }));
    }
    return (
        <>
            <legend>Start date:</legend>
            <input
                type=""
                name=""
                value={listItem.start}
                onChange={(e) => editItem("start", e.target.value)}
            />
            <legend>End date:</legend>
            <input
                type=""
                name=""
                value={listItem.end}
                onChange={(e) => editItem("end", e.target.value)}
            />
            <legend>Locale:</legend>
            <input
                type=""
                name=""
                value={listItem.locale}
                onChange={(e) => editItem("locale", e.target.value)}
            />
            <legend>Place:</legend>
            <input
                type=""
                name=""
                value={listItem.place}
                onChange={(e) => editItem("place", e.target.value)}
            />
            <legend>Position:</legend>
            <input
                type=""
                name=""
                value={listItem.position}
                onChange={(e) => editItem("position", e.target.value)}
            />
            <button type="" onClick={(_) => unhide(id, section)}>
                -
            </button>
            <button
                type=""
                onClick={(_) => {
                    deleteItem();
                }}
            >
                Delete
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
