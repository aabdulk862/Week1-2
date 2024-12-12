import { useState } from "react"
import { ChildComponent } from "./ChildComponent"

export const ParentComponent:React.FC = () => {

    //TODO: This is a "useState hook" notes on state 
    const [favColor, setColor] = useState("Red")

    return(
        <>
            <h3>Hello from the Parent Component!</h3>
            <ChildComponent color={favColor}/>
        </>
    )

}