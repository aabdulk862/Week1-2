/*In this component, props is of <ChildProps> type. What is that and what is props?

  Props is the data sent in from a parent component (the PROPerties the child component takes in)
  ParentComponent will render a ChildComponent in its TSX, and pass some values to it

  We defined an Interface (which is like a Java model) to define the values in this Child's props
  We can then use these values once they're sent in from a Parent rendering this component*/

interface ChildProps{
    color:string;
    song:string
}

export const ChildComponent:React.FC<ChildProps> = ({color, song}) => {



    return(
        <>
            <h4>Hello from the Child Component!</h4>
            <p>My Parent's favorite color is: {color}</p>
            <h5>My Parent's favorite song is: {song}</h5>
        </>
    )

}