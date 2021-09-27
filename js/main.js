const car = document.querySelector('.fa-car-side')


window.addEventListener('keypress', function (event) {    
    if (event.code === 'Space') {
        car.style.top = '-60px'
        car.style.left = '7%'
        setTimeout(() => {
            car.style.top = '-20px'
        }, 300)
        setTimeout(() => {
            car.style.left = '5%'
        }, 600)
    }
})

car.addEventListener('click', function (event) {  
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      car.style.color = getRandomColor()

})




