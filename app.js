let start = 3;
let end = 36;

start--
end--

let allVideosElem = document.querySelectorAll('#wc-endpoint'); // all videos element in list 
let downloadButton = document.querySelectorAll('.ytdl-extension-button')[0]; //download button element

const downloadFunc = ()=>{
    if (start >= end) {
        let interval1 = setInterval(()=>{
            console.log(1);
            if (downloadButton) {
                clearInterval(interval1);
                downloadButton.click()
        
        
                let interval2 = setInterval(()=>{
                    let button720 = document.querySelectorAll('.download-item__button')[0]; // 720 quality button in list of download
                    console.log(2);
                    if (button720) {
                        clearInterval(interval2);
                        button720.click() // start download
                        start++
                        setTimeout(()=>{
                            allVideosElem[start].click() // go to next video
                            document.getElementById('columns').click() // click on anything to close download list
                            setTimeout(()=>{
                                downloadFunc() // do again to download next
                            },1000)
                        },500)
                    }
                },500)
            }
        },500)    
    }
}

downloadFunc() // start 