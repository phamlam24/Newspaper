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