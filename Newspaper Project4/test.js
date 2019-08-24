function fetchData() {
    sendGetRequest('https://5d4ebd08d3acc30014f3889a.mockapi.io/testApi',function(ResponseData){
        function addNews(x){
            console.log(localStorage.getItem("tag"))
            document.getElementById('root').insertAdjacentHTML('beforeend',`<h1 id="title_posts">${news[x]['name']}</h1>`)
            document.getElementById('root').insertAdjacentHTML('beforeend',`<hr></hr>`)
            if(news[x]['time']){
                document.getElementById('root').insertAdjacentHTML('beforeend',news[x]['time'])
            }
            document.getElementById('root').insertAdjacentHTML('beforeend',`<img src="${news[x]['picture']}">`)
            if (news[x]['content[]']){
                console.log("success !!!!")
                var quick_info = `<div id='quick_info'>${news[x]['content[]'][0]}</div>`
                document.getElementById('root').insertAdjacentHTML('beforeend',quick_info)
                var paragraph =`
                <p>${String.raw`${news[x]['content[]'][1]}`.replace(/\n/ig,'<br />')}</p>
                `
                document.getElementById('root').insertAdjacentHTML('beforeend',paragraph)
            
            }
            else{
                var quick_info = `<div id='quick_info'>${news[x].content[0]}</div>`
                document.getElementById('root').insertAdjacentHTML('beforeend',quick_info)
                var paragraph =`
                <p>${news[x]['content'][1]}</p>
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