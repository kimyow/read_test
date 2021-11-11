
imgList = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]
// const bgImg = document.createElement("img")


const imageUrl =`img/${imgList[Math.floor(Math.random() * imgList.length)]}`

document.body.style.backgroundImage=`url('${imageUrl}')`