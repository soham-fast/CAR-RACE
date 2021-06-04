class Player{
    constructor(){

    }

    getCount(){
        database.ref("playerCount").on("value",function (data){
            playerCount=data.val();
        })
    }
        
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })

     }
//player1="player"+index
    updateName(name){
        var index="player"+ playerCount
        database.ref(index).set({
            name:name
        })
    }
}