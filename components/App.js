import logo from './logo.svg';
import './App.css';
import Entry from "./Entry";
import emojipedia from "./emojipedia.js";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span style={{boxShadow: "5px 5px 5px white"}}>Emojipedia 🌸</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
