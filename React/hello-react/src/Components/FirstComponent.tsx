/* Recall how Arrow functions work - they can take in values, and execute some code 
Our React Components will all be Arrow Functions (Functional Components)
In this component, we're providing no values, hence the empty ()

"export" - We need this so our Component can be imported around the app
"const" - The Component can't be reassigned, changed, etc
"React.FC" - We're saying this is a React (F)unctional (C)omponent
    -Basically we're defining what datatype this function returns
*/
export const FirstComponent:React.FC = () => {

    //We can define variables and logic in the space above the returned view
    const message:string = "I am a value stored in FirstComponent, and rendered in the TSX"

    //Notice the data binding of the message variable in the view
    return(
        <>
            <h4>Hi from FirstComponent</h4>
            <p>Data Binding: {message}</p>
        </>
    )

}