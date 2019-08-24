function fetchData() {
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function(ResponseData){
        
        function addNews(x){
            if(news[x].hasOwnProperty('content[]')){
                var NewsHTML = `
                <div class='content'>
                <p><img src="${news[x].picture}" class='picture' height=180 width=240></p>
                <button class='changepage' onclick="setpage(${news[x].tag})">${news[x].name}</button>
                <p class='description'>${news[x]["content[]"][0]}</p>
                </div>
                `  
            }
            else{
                var NewsHTML = `
                <div class='content'>
                <p><img src="${news[x].picture}" class='picture' height=180 width=240></p>
                <button class='changepage' onclick="setpage(${news[x].tag})">${news[x].name}</button>
                <p class='description'>${news[x].content[0]}</p>
                </div>
                ` 
            }
            var contents = document.getElementById('content')
            contents.insertAdjacentHTML('beforeend',NewsHTML)
        }
        
        var news = ResponseData
        console.log(news)
        for(let i = news.length-1; i>=0 ;i--){
            addNews(i)
        }
    })
}
function setpage(x){
    localStorage.setItem('tag',x)
    window.location.href=('./test.html')
}
document.getElementById('main').addEventListener('click',()=>{
    window.location.href = './index.html'
})
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
fetchData()