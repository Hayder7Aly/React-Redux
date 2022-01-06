import React from 'react'
import { buyCake } from '../redux/cakes/cakeAction'
import { connect } from 'react-redux'

const CakeContainer = (props) => {

    console.log(props)

    return (
        <>
            <div style={{display:"flex" , justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
            <div><h1>Cake Shop</h1></div>
            <h3>Available Cake = {props.numOfCakes}</h3>
            <br />
            <button onClick={props.buyCake}>buy cake</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
