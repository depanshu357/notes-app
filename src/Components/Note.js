const AddNote = ({id,text,date}) =>{
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
            </div>
        </div>
        
    )
}
export default AddNote;