
import JournalEntry from "./JournalEntry";
const JournalEntries = ({entries}) => {
    const COLORS = [
        "surface-blue",
        "surface-red",
        "surface-green",
        "surface-orange"
      ];

      const getEntryColor = (index) => {
        return COLORS[index % COLORS.length];
      }

      return (
        <div className="surface">
        <ul className="entries-list">
            {entries.map(({text,isDone}, index) => (
                <li key={index} className={`${getEntryColor(index)} surface-styles ${isDone ? "entry-done" : ""}`}>
                    <JournalEntry text={text} isDone={isDone} >
                        {text}
                    </JournalEntry>
                </li>
            ))}
        </ul>
        </div>
        );
    }
        
export default JournalEntries;