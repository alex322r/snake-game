
// variable de juego

// dimensiones del canvas

const SCREEN_WIDTH = 300
const SCREEN_HEIGHT = 600

//tamaño de cada cuadro de la serpiente
const square = 10

// posiciones iniciales de la serpiente
const snake = [[SCREEN_WIDTH/2, SCREEN_HEIGHT/2]]

// direcciones posibles

const DIRECTIONS = {

  RIGHT: 'right',
  DOWN: 'down',
  LEFT: 'left',
  UP: 'up'

}


// direccion de la serpiente
// iniciamos a la derecha

let direction = DIRECTIONS.RIGHT

// obtener el elemento canvas

const $canvas = document.getElementById("screen")


// funcion para dibujar los elementos en pantalla

function draw() {
  
  
// obtener el contexto 2d del canvas
  const ctx = $canvas.getContext("2d")

  // limpia el canvas antes de cada actualizacion
  
  ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

  // dibujar la serpiente
  


  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = 'red'
    } else {
      ctx.fillStyle = 'blue'
    }
    
    ctx.fillRect(snake[0][0], snake[0][1], square, square)  


    // actualiza las variables del juego
    update()
  
  }

  // dibuja el juego
  requestAnimationFrame(draw)

}


// funcion para mover la serpiente pasandole una direccion
function moveSnake(_direction) {
  // velocida de la serpiente
  let velocity = 2

  switch (_direction) {
    case 'right':
        
      snake[0][0]+=velocity
      break;
    case 'down':
      snake[0][1]+=velocity
      break;
    case 'left':
      snake[0][0]-=velocity
      break;

    case 'up':
      snake[0][1]-=velocity
      break;
  }

}

// funcion que cambia la direccion 
function changeDirection(key) {
  switch (key) {
    case 'w':
      direction = DIRECTIONS.UP
      break;

    case 'd':
      direction = DIRECTIONS.RIGHT
      break;
    case 's':
      direction = DIRECTIONS.DOWN
      break;

    case 'a':
      direction = DIRECTIONS.LEFT
      break;

    default:
      break;
  }

}



// funcion para actualizar la variables del juego
function update() {
  
  moveSnake(direction)
}

// dibuja el canvas
draw()

// evento para presionar las teclas
document.querySelector('body').addEventListener('keydown', e => {
  changeDirection(e.key)
})

document.querySelector('body').addEventListener('click', e => {


  
  const target = e.target.closest('.direction'); // Busca el elemento más cercano con la clase 'direction'
  if (target) {
    const key = target.innerText;
    changeDirection(key);
    
  }


})







