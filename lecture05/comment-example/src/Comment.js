import React from 'react';

const styles = {
    root : {
        width : '20%',
        margin : 'auto',
        marginTop : 16,
        padding : 16,
        textAlign : 'left',
        backgroundColor : 'white',
        borderRadius : 16,
    },
    imageContainer : {
        display : 'inline-block',
        width : 50,
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 25,
    },
    commentContainer : {
        display : 'inline-block',
        marginLeft : 16,
        textAlign : 'left',
        verticalAlign : 'top',
    },
    nameText : {
        color : 'black',
        fontSize : 20,
        fontWeight : 700,
    },
    contentText : {
        color : 'black',
        fontSize : 16,
    }
}

class Comment extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called`);
    }

    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called`);
    }

    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() called`);
    }



    render(){
        const {name, content} = this.props;
        return (
            <div style={styles.root}>
                <div style={styles.imageContainer}>
                    <img src='https://avatars1.githubusercontent.com/u/47407541?s=460&v=4' style={styles.image}/>
                </div>
                <div style={styles.commentContainer}>
                    <div style={styles.nameText}>
                        {name}
                    </div>
                    <span style={styles.contentText}>
                        {content}
                    </span>
                </div>
            </div>
        )
    }
}

export default Comment;