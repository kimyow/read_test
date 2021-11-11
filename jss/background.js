
imgList = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]
const bgImg = document.createElement("img")


bgImg.src=`img/${imgList[Math.floor(Math.random() * imgList.length)]}`

document.body.appendChild(bgImg)