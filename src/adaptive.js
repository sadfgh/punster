window.onload = function(){
    var fenwidth = 750/10
    var width = document.documentElement.clientWidth
    console.log(width)
    var score = 750/width
    var hl = document.querySelector('html')
    hl.style.fontSize = fenwidth/score+'px'
}