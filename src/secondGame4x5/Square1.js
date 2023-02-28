const squareStyle = {
    border: "2px solid brown",
    background: "orange",
    marginRight: '-1px',
    marginTop: '-1px',
    fontSize: "60px",
    fontWeight: "800",
    float: 'left',
    cursor: "pointer",
    padding: "0px",
    textAlign: "center",
    height:'100px',
    width:'100px'
}

const Square1 = (props) => {
    return (
        <button  onClick={()=>props.openCard(props.card.id, props.card.img)} style={squareStyle}>

            {props.card.isOpen ? props.card.img : ""}


        </button>
    )
}
export default Square1;