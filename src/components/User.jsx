import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'


const User = ({userData, fetchUsers}) => {

    useEffect(()=>{
        fetchUsers()
    },[])

    const cssStyle = {
        width : "100%",
        height : "100%",
        display : "flex",
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
    }

    if(userData.loading){
        return (<h1>Loading ...</h1>)
    }else if(userData.error){
        return (<h1>Error 404</h1>)
    }
    
    return (
        <div style={cssStyle}>
            <h1>Fetch Users Name List </h1>
            {userData.users.map(user => <h3 key={user.id}>{user.name}</h3>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)
