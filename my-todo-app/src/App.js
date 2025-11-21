import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(function (prev) { return prev + 1; });
    };

    const decrement = () => {
        setCount(function (prev) { return prev - 1; });
    };

    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState("");

    function addNote() {
        const text = noteText.trim();
        if (text === "") {
            return;
        }
        setNotes([...notes, text]);
        setNoteText("");
    }

    return (
        <div className="App" style={{ textAlign: "center", padding: 24 }}>
            <h1>Счётчик: {count}</h1>
            <div style={{ display: "inline-flex", gap: 12 }}>
                <button type="button" onClick={increment}>+</button>
                <button type="button" onClick={decrement}>-</button>
            </div>

            <h2>Список заметок</h2>

            <form
                onSubmit={function (e) {
                    e.preventDefault();
                    addNote();
                }}
                style={{ marginBottom: 20 }}
            >
                <input
                    type="text"
                    value={noteText}
                    onChange={function (e) {
                        setNoteText(e.target.value);
                    }}
                    placeholder="Введите заметку"
                    style={{ padding: 8, width: "200px" }}
                />
                <button type="submit" style={{ marginLeft: 8 }}>
                    Добавить
                </button>
            </form>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {notes.map(function (note, index) {
                    return (
                        <li key={index} style={{ marginBottom: 8 }}>
                            {note}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;