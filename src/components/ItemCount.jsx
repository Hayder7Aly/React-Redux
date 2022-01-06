import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'
import { buyStarBuck } from '../redux/starbuck/starBuckActions'

const ItemCount = (props) => {
    return (
        <>
            <h1>{props.name} = {props.item} </h1>
            <button onClick={props.buyItem}>buy items</button>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCreame.numOfIceCreame
    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyStarBuck())

    return {
        buyItem : dispatchFunction
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemCount)
