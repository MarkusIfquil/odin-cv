export function Input({ cv, setCv }) {
    return (
        <div className="input">
            <DetailsSection personal={cv.personal} setCv={setCv} />
            <ListSection
                image={"/assets/school.png"}
                title={"Education"}
                items={cv.education}
                setCv={setCv}
                field={"education"}
            />
            <ListSection
                image={"/assets/suitcase.png"}
                title={"Work experience"}
                items={cv.professional}
                setCv={setCv}
                field={"professional"}
            />
        </div>
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
        <div className="card">
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
        </div>
    );
}

function ListSection({ image, title, items, setCv, field }) {
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
                    hidden: false,
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
        <div className="card list">
            <div className="title">
                <img src={image} alt="" className="icon-big" />
                <h1>{title}</h1>
            </div>
            {items.map((l) => {
                return (
                    <ListItem
                        item={l}
                        unhide={unhideEdit}
                        key={l.id}
                        field={field}
                        setCv={setCv}
                    />
                );
            })}
            <button className="plus-button" onClick={(_) => addItem()}>
                + {title}
            </button>
        </div>
    );
}

function ListItem({ item, unhide, field, setCv }) {
    console.log(item.hidden);
    return (
        <>
            <div className="list-item">
                <h2>{item.place}</h2>
                <img
                    src="/assets/arrow-down-sign-to-navigate.png"
                    className={
                        item.hidden
                            ? "dropdown-edit"
                            : "dropdown-edit dropdown-clicked"
                    }
                    onClick={(_) => {
                        unhide(item.id, field);
                    }}
                />
            </div>

            <ListItemEdit
                className={
                    item.hidden ? "list-item-edit hidden" : "list-item-edit"
                }
                listItem={item}
                setCv={setCv}
                section={field}
            />
        </>
    );
}

function ListItemEdit({ className, listItem, setCv, section }) {
    function editItem(field, value) {
        setCv((prev) => ({
            ...prev,
            [section]: prev[section].map((item) =>
                item.id === listItem.id ? { ...item, [field]: value } : item,
            ),
        }));
    }
    function deleteItem() {
        setCv((prev) => ({
            ...prev,
            [section]: prev[section].filter((i) => i.id !== listItem.id),
        }));
    }
    return (
        <div className={className}>
            <ItemInput
                legend={"Start date:"}
                value={listItem.start}
                onChange={(e) => editItem("start", e.target.value)}
            />

            <ItemInput
                legend={"End date:"}
                value={listItem.end}
                onChange={(e) => editItem("end", e.target.value)}
            />
            <ItemInput
                legend={"Locale:"}
                value={listItem.locale}
                onChange={(e) => editItem("locale", e.target.value)}
            />

            <ItemInput
                legend={"Place:"}
                value={listItem.place}
                onChange={(e) => editItem("place", e.target.value)}
            />

            <ItemInput
                legend={"Position:"}
                value={listItem.position}
                onChange={(e) => editItem("position", e.target.value)}
            />

            <ItemInput
                legend={"Description:"}
                value={listItem.description}
                onChange={(e) => editItem("description", e.target.value)}
            />

            <button
                className="delete-item"
                onClick={(_) => {
                    deleteItem();
                }}
            >
                Delete
            </button>
        </div>
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

function ItemInput({ legend, value, onChange }) {
    return (
        <div className="item-input">
            <legend>{legend}</legend>
            <input type="" name="" value={value} onChange={onChange} />
        </div>
    );
}
