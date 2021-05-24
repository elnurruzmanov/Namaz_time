const videoElement = document.querySelector ("#video")


async function main(){
    let media = await window.navigator.mediaDevices.getUserMedia({ video:true })

    videoElement.srcObject = media
}

main()