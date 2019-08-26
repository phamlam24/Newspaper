function fetchData() {
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function(ResponseData){
        
        function addNews(x){
            var NewsHTML = `
            <div class='content'>
            <img src="${news[x].picture}" class='picture' height=180 width=240>
            <button class='changepage' onclick="setpage(${news[x].tag})">${news[x].name}</button>
            <p class='description'>${news[x].content[0]}</p>
            </div>
            `  
            var contents = document.getElementById('content')
            if(news[x].category == "ctri"){
                contents.insertAdjacentHTML('beforeend',NewsHTML)
            }
        }
        
        var news = ResponseData
        console.log(news)
        for(let i = 0; i<news.length;i++){
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
fetchData()