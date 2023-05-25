import entries from "./data";
import JournalEntries from "./components/JournalEntries";
const Journal = () => {
    return (
        <div id="journal" className="surface">
            <h2>What's on your mind today</h2>

            <form>
                <input
                type="text"
                className="journal-input"
                placeholder="Write something..."
                />
            </form>
            <JournalEntries entries={entries} />
        </div>
    );
}

export default Journal;