//Video List JS

    let listVideo = document.querySelectorAll('.videolist .vid');
    let mainVideo = document.querySelector('.mainvid video');
    let headTitle = document.querySelector('.mainvid .subtitle');

    listVideo.forEach(vid => {
    vid.onclick = () =>{
        listVideo.forEach(remove =>{remove.classList.remove('active')});
        vid.classList.add('active');

        if(vid.classList.contains('active')){
            let src = vid.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = vid.children[1].innerHTML;
            headTitle.innerHTML = text;
        };
   };
});
