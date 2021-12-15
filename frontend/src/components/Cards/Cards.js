import Card from "./Card"

const Cards = (props) => {
    let len = props.items.length;
    // console.log(props.items);
    return (
        <div>
            <Card items={props.items[0]} />
            <Card items={props.items[1]} />
            <Card items={props.items[2]} />
            <Card items={props.items[3]} />
        </div>
    )
}

export default Cards;