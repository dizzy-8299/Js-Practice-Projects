const btn = document.getElementById('btn')
const colors = ["red","blue","green","rgba(222,154,224)"]
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    let random = getRandom();

    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

function getRandom(){
    return Math.floor(Math.random() * colors.length)
}
