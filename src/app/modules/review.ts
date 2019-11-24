export interface Review {
    id : number,
    rating : number,
    description : string,
    createdAt : string,
    gameId : number,
    user : {
        id : number,
        username : string,
        role : string,
        profilePic : string
    }
    reviewFlags : [{
        id : number,
        isFlagged : boolean,
        userId : number
    }],
    reviewVotes : [{
        id : number,
        vote : number,
        userId : number
    }]
}