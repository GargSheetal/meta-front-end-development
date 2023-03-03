function Heading(props) {
    const headStyle = {
        fontSize : "40px",
        color : "red"
    }
    return (
        <h1 style = {headStyle}>
            {props.message}
        </h1>
    )
}
export default Heading;