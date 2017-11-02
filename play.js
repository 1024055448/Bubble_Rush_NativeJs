//蓝 class
var blueBubble = document.getElementsByClassName("blueBubble");  
//整体 class
var container = document.getElementsByClassName("container");  
//红 class
var redBubble = document.getElementsByClassName("redBubble")[0];    
//创建蓝色气泡DOM  
var blueimg = document.createElement("img");  
blueimg.setAttribute("src","./blue.png");  
blueimg.setAttribute("alt","blueBubble");  
blueimg.setAttribute("class","blueBubble"); 

//蓝色气泡数量
var blueNum=Math.ceil(Math.random()*20);  
for (let i=0;i<=blueNum-1;i++) {  
    let oi=blueimg.cloneNode(true);
    container[0].appendChild(oi);  
}  
//气泡大小  
for (let i=0; i<=blueBubble.length-1; i++) {  
    let ballSize = hwsize();  
    blueBubble[i].style.width = ballSize+"px";  
    blueBubble[i].style.height = ballSize+"px";  
}  
//蓝 随机 
//var widthScreen=document.body.clientWidth;
//var heightScreen=document.body.clientHeight;
for (let i=0;i<blueBubble.length;i++) {  
    blueBubble[i].style.top = Math.ceil(Math.random()*800)+"px";  
    blueBubble[i].style.left = Math.ceil(Math.random()*1600)+"px";  
} 
 //蓝 大小 
function hwsize() {                               
    return Math.ceil(Math.random()*50)+50;  
}   
//红 鼠标移动改变 
container[0].addEventListener("mousemove",function(e){  
    var redYX = redPositionX(e);  
    redBubble.style.left = redYX.x+"px";  
    redBubble.style.top = redYX.y+"px";  
    for (let i=blueBubble.length-1;i>=0;i--) {  
        blueBoom(i);  
    }  
});  
//读取红 坐标 并不让其越界  
function redPositionX(e) {  
    var redXY = {  
    x:0,  
    y:0      
    };  
    //判断xy是否越界
    var xr = e.clientX-container[0].offsetLeft-redBubble.width/2;  
    var yr = e.clientY-container[0].offsetTop-redBubble.height/2;
    var widthScreen=document.body.clientWidth;
   
   // console.log(yr);  
    if(xr < 0){  
        redXY.x = 0;  
    }else{  
        if(xr > (widthScreen-redBubble.width)){  
            redXY.x = widthScreen-redBubble.width;  
        }else{  
            redXY.x = xr;  
        }  
    }  
    if(yr < 0){  
        redXY.y = 0;  
    }else{  
        if(yr > (widthScreen - redBubble.height)){  
            redXY.y = widthScreen - redBubble.height;  
        }else{  
            redXY.y = yr;  
        }  
    }  
    return redXY;  
}  
//红蓝碰撞
function blueBoom(i){  
    //position blue  
    var blueX = blueBubble[i].offsetLeft;  
    var blueY = blueBubble[i].offsetTop;  
    //position red
    var redX = redBubble.offsetLeft;  
    var redY = redBubble.offsetTop;  
    console.log(redX,redY);
    //碰撞
   var sizeX = Math.abs(redX-blueX);  
   var sizeY = Math.abs(redY-blueY);  
   var distance=Math.sqrt(sizeX*sizeX+sizeY*sizeY);
   //两直径和大于两圆心间距
        if(distance < redBubble.width/2 +blueBubble[i].width/2){ 
               // if(distance < redBubble.width/2 + blueBubble[i].width/2){  //红泡直径大于两泡y间距
                    //code 气泡移动  最少移动一个红气泡的距离
                    blueBubble[i].style.top = Math.ceil(Math.random()*700+100) + "px";  
                    blueBubble[i].style.left = Math.ceil(Math.random()*1500+100) + "px"; 
                    blueBubble[i].style.right=Math.ceil(Math.random()*1500+100) +"px";
                    blueBubble[i].style.bottom=Math.ceil(Math.random()*700+100) +"px";
             //   }  
                return;  
        }  
        return;  
       
}