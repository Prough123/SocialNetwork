import React from 'react';
import Header from "./Header";
import axios from "axios";

class HeaderContainer extends React.Component<any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFethcing(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    render() {
        return(
           <Header/>
        )
    }
}

export default HeaderContainer;