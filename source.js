var imgs =Array.from(document.querySelectorAll('.img-thumbnail'));
var background =document.querySelector(".background");
var backgrounditem =document.querySelector(".backgrounditem");
var exit = document.querySelector('.exit');
var next = document.querySelector('.next');
var prev = document.querySelector('.previous');
var imageIndex;

for(var i=0;i<imgs.length;i++)
{
imgs[i].addEventListener("click",function(e){
    showPortfolio(e)

})
}
function showPortfolio(event) {
    console.log(event.target)
        imageIndex = imgs.indexOf(event.target);
        background.classList.add('d-flex');
        background.classList.remove('d-none');
        backgrounditem.style.backgroundImage = `url(${event.target.src})`;
    }
    exit.addEventListener("click", exitimgs);
    function exitimgs()
    
    { 
        background.classList.add('d-none');
         background.classList.remove('d-flex'); 
    }
    next.addEventListener("click", nextimgs)
    function nextimgs() 
    {
      
        if (imageIndex == 5) {
    
            imageIndex = -1;
    
        }
    
        var nextImage = imgs[imageIndex + 1].src ; 
    
    
        backgrounditem.style.backgroundImage = `url(${nextImage})`;
        imageIndex++;
        console.log(imageIndex);
    }   
    prev.addEventListener("click", nextimgs) 
    function previmgs()
    {
        
        if (imageIndex == 0) {

            imageIndex = 6;
    
        }
        var prevImage = imgs[imageIndex - 1].src; 
    
        backgrounditem.style.backgroundImage = `url(${prevImage})`;
        imageIndex--;
        console.log(imageIndex);
    
    }
    background.addEventListener("dblclick", function () 
    { backgrounditem.classList.add('d-none'); background.classList.remove('d-flex'); 
    
    
    }
    );
    document.addEventListener('keydown',function(e)
    {
        if(e.key=='Escape')
        {
            exitimgs();
        }
        else if(e.key=='ArrowRight')
        {
            nextimgs() ;
        }
        else if(e.key=='ArrowLeft')
        {
            previmgs();
        }
    })