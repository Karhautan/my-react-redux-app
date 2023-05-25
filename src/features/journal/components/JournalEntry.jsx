import Confetti from 'react-dom-confetti'

const JournalEntry = ({ children, id, isDone }) => {

    return (
        <div className="entry">
            <div className="entry-actions-container">
                <button
                    className="remove"
                >
                    Remove
                </button>
                <button
                    className="done"
                >
                    {isDone ? "Redo" : "Done"}
                    <Confetti active={isDone} config={{spread:360}} />
                </button>
            </div>
            {children}
        </div>
    )
}

export default JournalEntry