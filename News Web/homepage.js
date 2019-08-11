function fetchData() {
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function(ResponseData){
        function addNews(x){
            var NewsHTML = `
            <div class='content'>
            <img src="${news[x].picture}" id='picture' height=200 width=300>
            <a href='./test.html/${news[x].tag}' id='title'>${news[x].name}</a>
            <p id='description'>${news[x].content[0]}</p>
            </div>
            `  
            var contents = document.getElementById('content')
            contents.insertAdjacentHTML('beforeend',NewsHTML)
            }
        var news = ResponseData
        console.log(news)
        for(let i = 0; i<news.length;i++){
            addNews(i)
        }
    })
}
fetchData()
var currenttag=5 

