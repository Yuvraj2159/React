

export default function Third (props) {
    console.log(props.name)

    return(

        <>
        <h1> Name: {props.name} </h1>
        <h1> Age: {props.age} </h1>
        <h1> Gender: {props.gender} </h1>
        </>
    )
}