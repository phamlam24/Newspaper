function fetchData() {
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function(ResponseData){
        
        function addNews(x){
            if(news[x].hasOwnProperty('content[]')){
                var NewsHTML = `
                <div class='content'>
                <p><img src="${news[x].picture}" class='picture' height=180 width=240></p>
                <button class='changepage' onclick="setpage(${news[x].tag})">${news[x].name}</button>
                <p id='description'>${news[x]["content[]"][0]}</p>
                </div>
                `  
            }
            else{
                var NewsHTML = `
                <div class='content'>
                <p><img src="${news[x].picture}" class='picture' height=180 width=240></p>
                <button class='changepage' onclick="setpage(${news[x].tag})">${news[x].name}</button>
                <p id='description'>${news[x].content[0]}</p>
                </div>
                ` 
            }
            var contents = document.getElementById('content')
            if(news[x].category == "sport"){
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