 function fetchData() {
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function(ResponseData){
        function addNews(x){
            var titleandpic =`
            <h1 id='title_posts'>${news[x].name}</h1>
            <hr>
            <img src='${news[x].picture}' id='picture'>
            `
            document.getElementById('root').insertAdjacentHTML('beforeend',titleandpic)
            var quick_info = `<div id='quick_info'>${news[x].content[0]}</div>`
            document.getElementById('root').insertAdjacentHTML('beforeend',quick_info)
            for(let i = 1; i<news[x].content.length;i++){
                var paragraph =`
                <p>${news[x].content[i]}</p>
                `
                document.getElementById('root').insertAdjacentHTML('beforeend',paragraph)
            }
        }
        var news = ResponseData
        console.log(news)
        addNews(localStorage.getItem('tag'))

    })
}
fetchData()