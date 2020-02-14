import React from 'react'

class NotFound extends React.Component{
    constructor(props){
        super(props);
        this.state = {id:null};
    }

    render(){
        return(
            <div>
                <h1>Not Found</h1>       
                <p>We can't find what you're looking for...</p>
            </div>
        )
    }
}

export default NotFound