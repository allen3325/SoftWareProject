import Card from "./Card"

const Cards = (props) => {
    let len = props.items.length;
    // console.log(props.items);
    return (
        <ul>
            <Card items={props.items[0]} />
            <Card items={props.items[1]} />
            <Card items={props.items[2]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
            <Card items={props.items[3]} />
        </ul>
    )
}

export default Cards;