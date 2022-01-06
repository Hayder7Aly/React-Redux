import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCreame } from '../redux/icecreame/iceActions'

const Ice = () => {
    
    const [buy, setBuy] = useState("")
    const state = useSelector(state => state.iceCreame.numOfIceCreame)
    const dispatch = useDispatch()

    return (
        <>
        <div style={{display:"flex" , justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
        <div><h1>IceCreame Shop</h1></div>
        <h3>Available iceCreames = {state} </h3>
        <input type="text" placeholder="how many ice creames do you want to buy ?" value={buy} onChange={e => setBuy(e.target.value)} />
        <br />
        <button onClick={()=>dispatch(buyIceCreame(+buy))}>buy iceCreame</button>
        </div>
        </>
    
    )
}

export default Ice
