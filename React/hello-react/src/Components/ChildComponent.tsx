//TODO: notes on props

export const ChildComponent:React.FC = ({color}) => {



    return(
        <>
            <h4>Hello from the Child Component!</h4>
            <p>My Parent's favorite color is: {color}</p>
        </>
    )

}