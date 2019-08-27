numpage = 0
numdata = 0
function fetchData() {
    document.getElementById('content').innerHTML=""
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function data(ResponseData){
        
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
        numdata = news.length
        for(let i = news.length-1 -(numpage)*20; i>=Math.max(news.length-1 -(numpage)*20-19,0) ;i--){
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
// nút chuyển trang
if(numpage>0){
  document.getElementById('pagechanger').insertAdjacentHTML("afterbegin",`<button onclick="nextpage(-1)>"${numpage}</button>`)
}
document.getElementById('newnews0').innerHTML=`${numpage+1}`
document.getElementById('newnews0').style.backgroundColor = "lightblue"
document.getElementById('newnews1').innerHTML=`${numpage+2}`
document.getElementById('newnews2').innerHTML=`${numpage+3}`
document.getElementById('newnews3').innerHTML=`${numpage+4}`
document.getElementById('newnews4').innerHTML=`${numpage+5}`
function nextpage(x){
  if((numpage+x >= 0) && (numpage +x < Math.ceil(numdata/20))){
    numpage +=x;
    fetchData()
    console.log(numpage)
    console.log(Math.ceil(numdata/20))
    if(numpage>0){
      document.getElementById('pagechanger').insertAdjacentHTML("afterbegin",`<button onclick="nextpage(-1)" id="newnews-1">${numpage}</button>`)
    }
    else if(document.getElementById("newnews-1")){
      document.getElementById("newnews-1").remove()
    }
    document.getElementById('newnews0').innerHTML=`${numpage+1}`
    document.getElementById('newnews0').style.backgroundColor = "lightblue"
    document.getElementById('newnews1').innerHTML=`${numpage+2}`
    document.getElementById('newnews2').innerHTML=`${numpage+3}`
    document.getElementById('newnews3').innerHTML=`${numpage+4}`
    document.getElementById('newnews4').innerHTML=`${numpage+5}`
  }
}
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
fetchData()