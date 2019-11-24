export interface Comment {
    commentFlags : [{
        id : number,
        isFlagged : boolean,
        userId : number
    }],
    commentVotes : [{
        id : number,
        vote : number,
        userId : number
    }],
    createdAt : string,
    description : string,
    id : number,
    reviewId : number,
    user : {
        id : number,
        profilePic : string,
        role : string,
        username : string
    }
}