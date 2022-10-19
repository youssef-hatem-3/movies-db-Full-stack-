let rowItems = document.querySelector('#rowItems');
let nowPlaying = document.querySelector('#nowPlaying');
let popular = document.querySelector('#popular');
let topRated = document.querySelector('#topRated');
let upcoming = document.querySelector('#upcoming');
let trending = document.querySelector('#trending');
let xicon = document.querySelector('#xicon');
let searchSCBar = document.querySelector('#searchSCBar')
let searchAMBar = document.querySelector('#searchAMBar');
let currentMovies = 'popular' ;
async function getMovies()
{
    var response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovies}?api_key=d8fbb5cd520d995ebc6cb1e6aa20dde9`) ;
    var finalResult = await response.json();
    nowPlayingMovies(finalResult)

    nowPlaying.addEventListener("click", async function() {
        currentMovies = 'now_playing';
        var response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovies}?api_key=d8fbb5cd520d995ebc6cb1e6aa20dde9`) ;
        var finalResult = await response.json();
        nowPlayingMovies(finalResult);
    });
    popular.addEventListener("click", async function() {
        currentMovies = 'popular' ;
        var response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovies}?api_key=d8fbb5cd520d995ebc6cb1e6aa20dde9`) ;
        var finalResult = await response.json();
        nowPlayingMovies(finalResult);
    });
    topRated.addEventListener("click", async function() {
        currentMovies = 'top_rated' ;
        var response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovies}?api_key=d8fbb5cd520d995ebc6cb1e6aa20dde9`) ;
        var finalResult = await response.json();
        nowPlayingMovies(finalResult);
    });
    upcoming.addEventListener("click", async function() {
        currentMovies = 'upcoming' ;
        var response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovies}?api_key=d8fbb5cd520d995ebc6cb1e6aa20dde9`) ;
        var finalResult = await response.json();
        nowPlayingMovies(finalResult);
    });
    trending.addEventListener("click", async function() {
        var response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR011wsKHej7r3s9vvJIvvBvR3ycO38vJysl-UjiC3G4SCh70DAhD_Ekpo8`) ;
        var finalResult = await response.json();
        nowPlayingMovies(finalResult);
    });

    searchSCBar.addEventListener("input", async function() {
        var response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovies}?api_key=d8fbb5cd520d995ebc6cb1e6aa20dde9`) ;
        var finalResult = await response.json();
        findMovies(finalResult);
    });
    
    searchAMBar.addEventListener("input", async function() {
        var response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchAMBar.value}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`) ;
        var finalResult = await response.json();
        findMovies(finalResult);
    });
}
(async function (){
    await getMovies() ;
})();
/////////////////////////////////////////////////////////////////////////////////////////////////////
function nowPlayingMovies(finalResult){
    var cartona = ``;
    for (let i = 0; i < finalResult.results.length; i++) {
        cartona += `
        <div class="col-md-4">
        <div class="post">
            <img src="https://image.tmdb.org/t/p/w500/${finalResult.results[i].poster_path}" alt="">
                <div class="postDescription text-center ">
                <h4>${finalResult.results[i].original_title}</h4>
                <p>${finalResult.results[i].overview}</p>
                <p>${finalResult.results[i].vote_average}</p>
                <p>${finalResult.results[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    rowItems.innerHTML = cartona ;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function findMovies(finalResult){
    var searchResult = [] ;
    for(var i=0;i< finalResult.results.length;i++)
    {
        if(finalResult.results[i].original_title.toLowerCase().includes(searchSCBar.value.toLowerCase()) == true )
        {
            searchResult.push(finalResult.results[i]);
        }
    }
    displayFindedMovies(searchResult)
}
function displayFindedMovies(searchResult)
{
    var cartona = ``;
    for (let i = 0; i < searchResult.length; i++) {
        cartona += `
        <div class="col-md-4">
        <div class="post">
            <img src="https://image.tmdb.org/t/p/w500/${searchResult[i].poster_path}" alt="">
                <div class="postDescription text-center ">
                <h4>${searchResult[i].original_title}</h4>
                <p>${searchResult[i].overview}</p>
                <p>${searchResult[i].vote_average}</p>
                <p>${searchResult[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    rowItems.innerHTML = cartona ;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
let divWidth = $('#MoviesBox').innerWidth();
$('#options').css({left :`-${divWidth}`})
$('#options i').click(function(){
   if($('#options').css('left') == '0px')
   {
    $('#options').animate({left:`-${divWidth}`},1000)
    xicon.classList.replace('fa-xmark','fa-bars')
    $('#unOrderList').slideUp(1000);
   }
   else
   {
    $('#options').animate({left:'0px'},1000)
    xicon.classList.replace('fa-bars','fa-xmark')
    $('#unOrderList').slideDown(1000);
   }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('a[href^="#"]').click(function(e){
    linkHref = $(e.target).attr('href') ;
    sectionOffset = $(linkHref).offset().top ;
    $('href,body').animate({scrollTop:sectionOffset},200)
    $(e.target).css('border-bottom','solid 1px white')
    $(e.target).parent().siblings().children().css('border-bottom','none')
})

function logOut() 
{
     window.location.replace("file:///C:/Users/dell/Desktop/Linkedin%203/Linkedin%203/JS%20EXAM/signIn.html");
}

