import React from 'react'
import { buyStarBuck } from '../redux/starbuck/starBuckActions'
import { connect } from 'react-redux'
const StarBuck = (props) => {
    
    return (
        <>
            <div style={{display:"flex" , justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
            <div><h1>StarBuck Shop</h1></div>
            <h3>Available StarBuck = {props.numOfStarBucks} </h3>
            <br />
            <button onClick={props.buyStarBuck}>buy starBuck</button>
            </div>
        </>
    )
}

const mapPropsToState = state => {
    return {
        numOfStarBucks : state.starBuck.numOfStarBucks
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        buyStarBuck : () => dispatch(buyStarBuck())
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(StarBuck);
