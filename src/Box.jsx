import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Box() {
    let [boxColor, setBoxColor] = React.useState(null)
    let color = useSelector(state => state.color)
    console.log(color,"from boxxxxx")
    return (
        <>
            {
                boxColor ? <div style={{ backgroundColor: `${boxColor}` }} className="box-body" > <div style={{ color: `black` }}>Colorful Box</div><input onChange={(e) => setBoxColor(e.target.value)} placeholder="Your color is: "></input>
                </div>
                    : <div style={{ backgroundColor: `${color}` }} className="box-body" > <div style={{ color: `black` }}>Colorful Box</div><input onChange={(e) => setBoxColor(e.target.value)} placeholder="Your color is: "></input>
                </div>
            }
        </>


    )
}
