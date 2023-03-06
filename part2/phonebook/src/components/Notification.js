const Notification = ({message, messageType}) =>{
    if (message === null) return null
    return(
        <div>
            <p className={messageType}>{message}</p>
        </div>
    )
}

export default Notification