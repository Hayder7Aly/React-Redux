import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {buyCake} from "../redux/cakes/cakeAction"

const CakeContainer2 = () => {

    const state = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()



    return (
        <>
        <div style={{display:"flex" , justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
        <div><h1>Cake Shop</h1></div>
        <h3>Available Cake = {state}</h3>
        <br />
        <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
        </>
    )
}

export default CakeContainer2
