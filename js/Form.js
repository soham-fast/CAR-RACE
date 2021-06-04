class Form{
    constructor(){

    }

    display(){

        var title=createElement("h1");
        title.html("CAR RACE")
        title.position(330,100);

        var input=createInput("Name");
        input.position(330,260);

        var button=createButton("Go")
        button.position(330,300);

        //function (){} anonymous function
        //arrow operator function  ()=>{......}

        button.mousePressed( ()=>{
            input.hide();
            button.hide();


            var name=input.value();
            playerCount =playerCount+1;
            player.updateCount(playerCount);
            player.updateName(name);

         var greeting=createElement("h3");
         greeting.html("Hello "+name);
         greeting.position(330,260);  

        });

    }
    
}

//Textinput, button  & title