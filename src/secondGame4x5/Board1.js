import Square1 from "./Square1";

const boardStyle = {
    border: "4px solid black",
    width: "400px",
    height: "300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: 'auto auto auto auto auto'
}
const Board1 = (props) => {
    return (
        <div style={boardStyle}>
            {props.board.map((el) =>
                <Square1 key={el.id}
                        card={el}
                        openCard={props.openCard}
                />)
            }

        </div>
    )
}
export default Board1;