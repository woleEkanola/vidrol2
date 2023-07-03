const xx= document.querySelector('.splashModal')
window.setTimeout(function(){

xx.style.display = 'none'
}, 3800)

xx.addEventListener('click', function(){
    xx.style.display = 'none' 
})

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
if(setButton){

    setButton.addEventListener('click', (e) => {
        const title = titleInput.value
        window.api.video(title)
    })
}


const videoForm = document.getElementById('videoDetails')
videoForm.addEventListener('change',e =>{
    // console.log(e)
    if(e.target.value == 'YouTube' || e.target.value == 'Vimeo'){
videoForm.videoFile.type = 'hidden'
videoForm.id.type = 'text'
    }else if(e.target.value == 'Local File'){
        videoForm.id.type = 'hidden'
        videoForm.videoFile.type = 'file'
    }
})

videoForm.addEventListener('submit', function(e){
    e.preventDefault()
    let tgt = e.target
   
  
    const details = {
        id: tgt.id.value,
        localVideo: tgt.videoFile.files ? tgt.videoFile.files[0].path:'',
        platform: tgt.platform.value,
        // width:tgt.videoFile.files ? tgt.videoFile.files[0].path:'',
        // height: tgt.videoFile.files ? tgt.videoFile.files[0].path:'',



    }
    if(!tgt.videoFile.files && !tgt.id.value){
alert('Please ensure you add all details')
    }else{
        
        window.api.video(details)
    }
    // console.log(e.target.videoFile.files[0])
})

