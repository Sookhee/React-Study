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
    render(){
        return (
            <div style={styles.root}>
                <div style={styles.imageContainer}>
                    <img src='https://avatars1.githubusercontent.com/u/47407541?s=460&v=4' style={styles.image}/>
                </div>
                <div style={styles.commentContainer}>
                    <div style={styles.nameText}>
                        {this.props.name}
                    </div>
                    <span style={styles.contentText}>
                        {this.props.content}
                    </span>
                </div>
            </div>
        )
    }
}

export default Comment;