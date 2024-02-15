var elRed = document.querySelector('.red')
var elYellow = document.querySelector('.yellow')
var elGreen = document.querySelector('.green')


// setInterval(() => {
//     // var date = new Date()
//     if(elRed.style.add('.red__active')){
//         elYellow.style.remove('.yellow__active')
//         elGreen.style.remove('.green__active')
//     }else if(elYellow.style.add('.yellow__active')){
//         elRed.style.remove('.red__active')
//         elGreen.style.remove('.green__active')
//     }else if(elGreen.style.add('.green__active')){
//         elRed.style.remove('.red__active')
//         elYellow.style.remove('.yellow__active')
//     }
// }, 3000);

setInterval(()=>{
    var date = new Date()

    elRed.style.background = 'red'
    elYellow.style.background = 'grey'
    elGreen.style.background = 'grey'

},1000)

setInterval(()=>{
    var date = new Date()

    elRed.style.background = 'grey'
    elYellow.style.background = 'yellow'
    elGreen.style.background = 'grey'

},2000)

setInterval(()=>{
    var date = new Date()

    elRed.style.background = 'grey'
    elYellow.style.background = 'grey'
    elGreen.style.background = 'green'

},3000)