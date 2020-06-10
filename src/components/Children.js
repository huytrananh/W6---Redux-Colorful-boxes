import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Box from '../Box'

export default function Children() {
    let count = useSelector(state => state.count)
    let color = useSelector(state => state.color)
    let [boxColor, setBoxColor] = React.useState(null)
   
   
    console.log("color is: ", color)
    let dispatch = useDispatch()
    let textColor = "white"

   
    if (count > 10) {
        textColor = "yellow"
    }
    return (
        <div>
            {Array(count).fill('box').map(box => {
               return(
                   <Box></Box>
               )



            })}
        </div>
    )
}
