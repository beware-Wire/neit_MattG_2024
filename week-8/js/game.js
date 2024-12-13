
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)
var state;

function main()
{
    ctx.clearRect(0,0,c.width,c.height); 
    state()
}

//setup

var button = new GameObject();
var avatar = new GameObject();
var wall = new GameObject();
var level = new GameObject();
var basket = new GameObject();
var enemyShield = new GameObject();
var bad = new GameObject();
var wall = [];
var count = 0; 
const myImage = new Image();
var strawberry= document.getElementById("default");
var bomb= document.getElementById("bomb");
var grass= document.getElementById("grass");
var wallDes= document.getElementById("wall");
var wallDesS= document.getElementById("wallS");
var smiley= document.getElementById("avatar");
var basketDesU= document.getElementById("basketU");
var basketDesL= document.getElementById("basketL");
var basketDesR= document.getElementById("basketR");
var basketDesD= document.getElementById("basketD");

//var strawberry= document.getElementById("default");


//enemy stuff


var testEnemy = new GameObject();
testEnemy.x = 100;
testEnemy.y = 100;
testEnemy.w = 50;
testEnemy.h = 50;
testEnemy.color = `black`;
testEnemy.world = level

var backGround = new GameObject();
backGround.x = -350;
backGround.y = 0;
backGround.w = 2000;
backGround.h = 2000;
backGround.color = `green`;
backGround.world = level;

/*var backGround2 = new GameObject();
backGround2.x = -350;
backGround2.y = 0;
backGround2.w = 1000;
backGround2.h = 1000;
backGround2.color = `green`;
backGround2.world = level;
*/



var amt = 75;
var enemies = [];



for(var i=0; i<amt; i++)
{
    enemies[i] = new GameObject();
    enemies[i].color = `red`;
    enemies[i].w = 50; 
    enemies[i].h = 50;
    enemies[i].x = rand(-1055, 350);
    enemies[i].y = rand(-465, 950);
    enemies[i].world = level
    myImage.scr='images/strawberry.png';
    if(state == init){
        enemies[i].x = rand(-1055, 350);
        enemies[i].y = rand(-465, 950);
    
    }

    myImage.width = 50
    myImage.h = 50;
    myImage.x = rand(-1055, 350);
    myImage.y = rand(-465, 950);
    document.body.appendChild(myImage);
    //Enemy defeat
    while(enemies[i].overlaps(basket))
    {
        if(enemies[i].x < basket.x)
        {
            enemies[i].x-=1;
        }
        if(enemies[i].x >= basket.x)
        {
            enemies[i].x++;
        }
    }
    
    
}

var amt2 = 14;
var enemies2 = [];
for(var i=0; i<amt2; i++)
    {
        enemies2[i] = new GameObject();
        enemies2[i].color = `#000000`;
        enemies2[i].w = 50; 
        enemies2[i].h = 50;
        enemies2[i].x = rand(-1055, 350);
        enemies2[i].y = rand(-465, 950);
        enemies2[i].world = level
    
        //Enemy defeat
        while(enemies2[i].overlaps(basket))
        {
            if(enemies2[i].x < basket.x)
            {
                enemies2[i].x-=1;
            }
            if(enemies2[i].x >= basket.x)
            {
                enemies2[i].x++;
            }
        }
        
        
    }



function init()
{
    state = menu

    avatar.color = `green`;

    level.x = 100; 
    level.y = 0;

    //Top
    wall[0]=new GameObject();
    wall[0].h = 500;
    wall[0].w = 1525;
    wall[0].color = `pink`
    wall[0].x = -350;
    wall[0].y = -750
    wall[0].world = level

    //Right
    wall[1]=new GameObject();
    wall[1].h = 2500;
    wall[1].w = 500;
    wall[1].color = `pink`
    wall[1].x = 635;
    wall[1].y = 250
    wall[1].world = level

    //left
    wall[2]=new GameObject();
    wall[2].h = 2500;
    wall[2].w = 500;
    wall[2].color = `pink`
    wall[2].x = -1350;
    wall[2].y = 250
    wall[2].world = level

    //bottom
    wall[3]=new GameObject();
    wall[3].h = 500;
    wall[3].w = 1525;
    wall[3].color = `pink`
    wall[3].x = -350
    wall[3].y = 1250
    wall[3].world = level

    basket.color = `#000000`;
}

init();

/*---------------Game Screens (states)----------------*/
function menu()
{
    //document.write("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if(clicked(button))
    {
        //draw
        state = game;
    }
    button.render()
}


function win()
{
    console.log("Winner!");
         //count = 0; 
         window.alert("You Win!!!    your score is 75")
    let score = parseInt(document.querySelector('.score').innerHTML);
    document.querySelector('.score').innerHTML = count;
    state = init;
        
    
}
function lose()
{    
    window.alert("You lost :(    your score is " + count)
    let score = parseInt(document.querySelector('.score').innerHTML);
    document.querySelector('.score').innerHTML = count;
    state = init;
}

function game()
{
    backGround.renderImage(grass);

    if (count % 10 == 0){
        amt += 10;
        }
    basket.x = 10000;
    enemyShield.x = 10000;
    //Player Movement
    
    if(a == true)
    {
        avatar.vx += -1;
    }
    if(d == true)
    {
        avatar.vx += 1;
    }
    if(w == true)
    {
        avatar.vy += -1;
    }
    if(s == true)
    {
        avatar.vy += 1;
    }
    //Player's Shield
    if(up == true)
    {
        basket.x = avatar.top().x;
        basket.y = avatar.top().y;
        basket.w = 100;
        basket.h = 50;

    }
    if(down == true)
    {
        basket.x = avatar.bottom().x;
        basket.y = avatar.bottom().y;
        basket.w = 100;
        basket.h = 50;

    }
    if(left == true)
    {
        basket.x = avatar.left().x;
        basket.y = avatar.left().y;
        basket.h = 100;
        basket.w = 50;


    }
    if(right == true)
    {
        basket.x = avatar.right().x;
        basket.y = avatar.right().y;
        basket.h = 100;
        basket.w = 50;

    }

    avatar.vx *= .85;
    avatar.vy *= .85;
    avatar.move();

    //used to move the level. 
    var offset = {x:avatar.vx, y:avatar.vy}

    for(let i=0; i<wall.length; i++)
    {
        while(wall[i].isOverPoint(avatar.bottom()))
        {
            avatar.vy = 0;
            avatar.y--;
            offset.y--;
        }
        while(wall[i].isOverPoint(avatar.top()))
        {
            avatar.vy = 0;
            avatar.y++;
            offset.y++;
        }
        while(wall[i].isOverPoint(avatar.left()))
        {
            avatar.vx = 0;
            avatar.x++;
            offset.x++;
        }
        while(wall[i].isOverPoint(avatar.right()))
        {
            avatar.vx = 0;
            avatar.x--;
            offset.x--;
        }
        
      
    }
    
    //Stops bombs
    for(let i=0; i<enemies2.length; i++)
    {
        
        
      
    }

    //testEnemy teleporter
    if(testEnemy.overlaps(avatar))
    {
        //testEnemy.x = 10000;
        avatar.color = testEnemy.color;
        state = lose;
        testEnemy.x = rand(-1055, 350);
        testEnemy.y = rand(-465, 950);
    }

    if(enemies.x > 10000){
        enemies[i].x = rand(-1055, 350);
        enemies[i].y = rand(-465, 950);

    } else if (state == menu) {
        enemies[i].x = rand(-1055, 350);
        enemies[i].y = rand(-465, 950);        
    }

    if(enemies2.x > 10000){
        enemies2[i].x = rand(-1055, 350);
        enemies2[i].y = rand(-465, 950);

    }
    //var count = 0;
    for(var i=0; i<enemies.length; i++)
    {
        /*----------INSTRUCTION------------
        make the avatar "collect" the pickups and increase the score
        -----------------------------------*/
        if(enemies[i].overlaps(basket))
        {
            enemies[i].x = 10000;
            avatar.color = enemies[i].color;
            count++;
            console.log(count);
            if(count >= 75){
                count = 0
                state = win;
                
            }
        
        }
        enemies[i].renderImage(strawberry);
    }
    
    for(var i=0; i<enemies2.length; i++)
        {
            /*----------INSTRUCTION------------
            make the avatar "collect" the pickups and increase the score
            -----------------------------------*/
            if(enemies2[i].overlaps(avatar))
            {
                avatar.color = enemies2.color;
                state = lose;
                testEnemy.x = rand(-1055, 350);
                testEnemy.y = rand(-465, 950);
                

            
            }
            enemies2[i].renderImage(bomb);
        }
    
    testEnemy.renderImage(bomb);
    basket.renderImage(basketDesD);
    //avatar.render();
    

    /*-------Level movement threshold----*/
    //if(avatar.x > 500 || avatar.x < 300)
    {
        //Level movement code
        level.x -= offset.x;
        avatar.x -= offset.x;
        level.y -= offset.y;
        avatar.y -= offset.y;
    }

    /*----- Camera Code -----------
        var dx = c.width/2 - avatar.x
        var dy = c.height/2 - avatar.y
        
        level.x += dx*.05; 
        avatar.x += dx*.05; 
        level.y += dy*.15; 
        avatar.y += dy*.15; 
    ----------------------------*/
    
    for(let i=0;i<wall.length; i++)
        {
         if (i % 2 == 0){
         wall[i].renderImage(wallDesS);
         }else{
            wall[i].renderImage(wallDes);

         }
        }

    avatar.renderImage(smiley);

    
}


function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}

