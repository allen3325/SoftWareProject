import Card from "./Card"

const Cards = (props) => {
    let len = props.items.length;
    // console.log(props.items);
    return (
        props.items.length>0?
            props.items.map((item, index) => { return <Card key={index} items={item} selectedFolder={props.selectedFolder}/> })
            : <p style={{padding:30}}>No diary</p>
    )
}

export default Cards;