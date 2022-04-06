let start = 196;
let end = 320;



const downloadToplearn = ()=>{
    if (start <= end) {
        let findItemButton = setInterval(() => {
            let itemButton = document.querySelectorAll('.video-item')[start+1].querySelector('.show-video')
            console.log(1);
        
        
            if (itemButton) {
                clearInterval(findItemButton);
                itemButton.click()
        
        
                let findItemDownload = setInterval(()=>{
                    let downloadButton = document.querySelectorAll('.video-item')[start].querySelector('.custom-download-btn')
                    console.log(2);
                    if (downloadButton) {
                        clearInterval(findItemDownload);
                        let urlDownload = downloadButton.getAttribute('href');
                        window.open(urlDownload,'_blank')
                        start++
                        setTimeout(()=>{
                            downloadToplearn()
                        },10000)
                    }
                },500)
        
        
            }
        }, 500);
    }else{
        console.log('end of download');
    }


}

downloadToplearn()