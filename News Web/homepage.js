var news =[
    {
        name: 'Thư - Vũ bất ngờ tái hợp, song ca cực ngọt trước ngày kết thúc Về nhà đi con',
        picture: 'https://vnn-imgs-f.vgcloud.vn/2019/08/10/17/-27.jpg',
        content:['Diễn viên Bảo Thanh bất ngờ có mặt trong buổi họp fan tại Hà Nội của Quốc Trường chiều 10/8. Cặp đôi diễn lại một trích đoạn trong phim "Về nhà đi con" và lần đầu hát chung. ','Chiều 10/8, Quốc Trường tổ chức gặp fan tại Hà Nội. Đây là lần đầu tiên nam diễn viên Cần Thơ tổ chức gặp fan tại Hà Nội, nơi anh gắn bó suốt 6 tháng qua vì phim "Về nhà đi con". Nam diễn viên xuất hiện chỉn chu trong trang phục quần âu và sơ mi đen - vest trắng và khiến fan bất ngờ khi hát ca khúc "Tình khúc vàng" đình đám một thời của thần tượng Đan Trường. '],
        tag: 0,
    },
    {
        name: 'Ảnh hiếm về sự tàn phá của bom hạt nhân ở Nagasaki',
        picture: 'https://vnn-imgs-f.vgcloud.vn/2019/08/10/11/buc-anh-mau-hiem-ve-su-tan-pha-kinh-hoang-cua-bom-hat-nhan-my-o-nagasaki.jpg',
        content:['fjiwhfewhfewhfwehifewhiefcafhfuwe'],
        tag:1,
    },
    {
        name: 'a',
        picture: './phonepicutres-TA.jpg',
        content:['fjiwhfewhfewhfwehifewhiefcafhfuwe'],
        tag:2,
    },
    {
        name: 'a',
        picture: './phonepicutres-TA.jpg',
        content:['fjiwhfewhfewhfwehifewhiefcafhfuwe'],
        tag:3,
    },
    {
        name: 'a',
        picture: './phonepicutres-TA.jpg',
        content:['fjiwhfewhfewhfwehifewhiefcafhfuwe'],
        tag:4,
    },
    {
        name: 'a',
        picture: './phonepicutres-TA.jpg',
        content:['fjiwhfewhfewhfwehifewhiefcafhfuwe'],
        tag:5
    },
]  
var currenttag=5 
function addNews(x){
    var NewsHTML = `
    <div class='content'>
    <img src="${news[x].picture}" id='picture' height=200 width=300>
    <a href=''./${news[x].tag} id='title'>${news[x].name}</a>
    <p id='description'>${news[x].content[0]}</p>
    </div>
    `  
    var contents = document.getElementById('content')
    contents.insertAdjacentHTML('beforeend',NewsHTML)
}
for(let i = 0; i<news.length;i++){
    addNews(i)
}