Comienzo explicandole Profesor Mario, empezare con la clase Ball, despues con la clase Brick, luego la clase Paddle y por ultimo el interfas y parte de la función.

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.speed = 3;
    this.vel = createVector(this.speed, -this.speed);
    this.r = 7;

//Este código es la definición de una clase llamada "Ball" que representa una pelota en un programa. La clase tiene un constructor que recibe dos parámetros (x, y) que representan las coordenadas de la posición inicial de la pelota en un plano cartesiano.

Dentro del constructor, se inicializan algunas propiedades de la pelota: "pos" es un objeto Vector que representa la posición actual de la pelota, "speed" es un número que indica la velocidad constante de la pelota, "vel" es un objeto Vector que representa la velocidad actual de la pelota, y "r" es un número que representa el radio de la pelota.

En resumen, este código es la definición de una clase que se puede utilizar para crear objetos que representen pelotas en un programa.

update() {
    this.pos.add(this.vel);

//Este código es un método llamado "update" que pertenece a la clase "Ball". Este método se encarga de actualizar la posición de la pelota en cada ciclo del programa.

Dentro del método, se utiliza la función "add" del objeto Vector para sumarle a la posición actual de la pelota (this.pos) la velocidad actual de la pelota (this.vel). Esto actualiza la posición de la pelota sumando a sus coordenadas actuales los valores de la velocidad, lo que hace que la pelota se mueva en la dirección y velocidad indicada por la propiedad "vel".

En resumen, este método se encarga de actualizar la posición de la pelota en cada ciclo del programa, lo que hace que la pelota se mueva de forma animada.

 colliding(brick) {
    if (this.pos.x + this.r < brick.pos.x - brick.width / 2) {
      return false;
    } else if (this.pos.x - this.r > brick.pos.x + brick.width / 2) {
      return false;
    } else if (this.pos.y + this.r < brick.pos.y - brick.height / 2) {
      return false;
    } else if (this.pos.y - this.r > brick.pos.y + brick.height / 2) {
      return false;
    } else {
      return true;
    }
  }

//Este código es un método llamado "colliding" que pertenece a la clase "Ball". Este método se encarga de determinar si la pelota colisiona con un objeto "brick" (ladrillo) pasado como argumento.

El método comprueba si la posición de la pelota se solapa con la posición del ladrillo a través de una serie de comprobaciones. Si la pelota está a la izquierda, derecha, arriba o abajo del ladrillo, el método devuelve "false", indicando que no hay colisión. De lo contrario, si la pelota está dentro del área del ladrillo, el método devuelve "true", indicando que hay colisión.

En resumen, este método se encarga de determinar si la pelota colisiona con un objeto "brick", lo que es útil para detectar colisiones y manejar la lógica de juego.

bounceOff(brick) {
    this.vel.x *= -1;
    this.update();

    var prevVel = this.vel.copy();

    if (this.colliding(brick)) {
      //console.log("bounce");
      this.vel.x *= -1;
      this.vel.y *= -1;
    }
    this.pos.sub(prevVel);
  }

//Este código es un método llamado "bounceOff" que pertenece a la clase "Ball". Este método se encarga de manejar la colisión entre la pelota y un objeto "brick" (ladrillo) pasado como argumento.

El método invierte la dirección horizontal de la pelota (this.vel.x *= -1) y llama al método "update" para actualizar la posición de la pelota. Luego, se crea una copia de la velocidad anterior de la pelota (prevVel) y se comprueba si hay colisión con el objeto "brick" llamando al método "colliding".

Si se detecta una colisión, el método invierte tanto la dirección horizontal como la dirección vertical de la pelota (this.vel.x *= -1; this.vel.y *= -1), lo que hace que rebote en la dirección opuesta. Por último, el método restaura la posición anterior de la pelota antes de la colisión (this.pos.sub(prevVel)) para evitar que la pelota quede incrustada en el objeto "brick".

En resumen, este método se encarga de manejar la colisión de la pelota con un objeto "brick", invirtiendo su dirección y evitando que la pelota quede incrustada en el objeto. Esto es útil para manejar la física del juego y asegurarse de que la pelota se comporte de manera realista al rebotar en los objetos del juego.

edges() {
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

//Este código es un método llamado "edges" que pertenece a la clase "Ball". Este método se encarga de comprobar si la pelota está tocando los bordes del área de juego y hacer que rebote en consecuencia.

El método comprueba si la posición x de la pelota es mayor que el ancho del área de juego menos el radio de la pelota (width - this.r), lo que significa que la pelota está tocando el borde derecho del área de juego. Si es así, la posición x de la pelota se ajusta para que quede justo en el borde (this.pos.x = width - this.r) y la dirección horizontal de la pelota se invierte (this.vel.x *= -1) para que rebote en la dirección opuesta.

El método también comprueba si la posición x de la pelota es menor que el radio de la pelota (this.r), lo que significa que la pelota está tocando el borde izquierdo del área de juego. Si es así, la posición x de la pelota se ajusta para que quede justo en el borde (this.pos.x = this.r) y la dirección horizontal de la pelota se invierte (this.vel.x *= -1) para que rebote en la dirección opuesta.

Por último, el método comprueba si la posición y de la pelota es menor que el radio de la pelota (this.r), lo que significa que la pelota está tocando el borde superior del área de juego. Si es así, la posición y de la pelota se ajusta para que quede justo en el borde (this.pos.y = this.r) y la dirección vertical de la pelota se invierte (this.vel.y *= -1) para que rebote en la dirección opuesta.

En resumen, este método se encarga de comprobar si la pelota está tocando los bordes del área de juego y hacer que rebote en consecuencia, evitando que la pelota salga de los límites del área de juego.

 bounce(paddle) {
    if (this.pos.x > paddle.pos.x - paddle.width / 2 && this.pos.x < paddle.pos.x + paddle.width / 2 && this.pos.y + this.r > paddle.pos.y - paddle.height / 2 && this.pos.y < paddle.pos.y) {
      let relativeX = map(this.pos.x, paddle.pos.x - paddle.width / 2, paddle.pos.x + paddle.width / 2, -1, 1);
      this.vel.set(relativeX * this.speed, -this.speed);
    }
  }

//Este código es un método llamado "bounce" que pertenece a la clase "Ball". Este método se encarga de comprobar si la pelota ha colisionado con la paleta y hacer que rebote en consecuencia.

El método comprueba si la posición x de la pelota está entre la posición x de la paleta menos la mitad de su ancho y la posición x de la paleta más la mitad de su ancho, y si la posición y de la pelota más su radio es mayor que la posición y de la paleta menos la mitad de su altura, y si la posición y de la pelota es menor que la posición y de la paleta. Si es así, significa que la pelota ha chocado con la paleta.

Luego, el método utiliza la función "map" para convertir la posición x de la pelota relativa a la paleta en un valor entre -1 y 1. Este valor se utiliza para ajustar la dirección horizontal de la pelota, mientras que la dirección vertical se invierte para que la pelota rebote hacia arriba. En resumen, este método se encarga de hacer que la pelota rebote en la dirección correcta después de chocar con la paleta.


 end() {
    if (this.pos.y > height) {
      lives--;
      this.reset();
      paddle.reset();
    }
    if (lives <= 0) {
      gameOver = true;
      gameStarted = false;
    }
  }

//Este código es un método llamado "end" que pertenece al juego. Este método se encarga de comprobar si la pelota ha caído fuera de la pantalla y actualizar el número de vidas y reiniciar la posición de la pelota y la paleta.

Si la posición y de la pelota es mayor que la altura de la pantalla, significa que la pelota ha caído fuera de la pantalla, por lo que se decrementa el número de vidas, se reinicia la posición de la pelota y se reinicia la posición de la paleta.

Si el número de vidas es menor o igual a cero, significa que el jugador ha perdido todas sus vidas y se establece la variable "gameOver" en verdadero y "gameStarted" en falso, lo que indica que el juego ha terminado. En resumen, este método controla el final del juego y actualiza la posición de los elementos del juego.

won() {
    if (bricks.length === 0) {
      gameWon = true;
      gameOver = false;
      gameStarted = false;
      gameInfo = false;
    }
  }

//Este código es un método llamado "won" que pertenece al juego. Este método se encarga de comprobar si el jugador ha ganado el juego, es decir, si no quedan más ladrillos por destruir.

Para hacer esta comprobación, el método verifica si la longitud del array "bricks" es igual a cero, lo que significa que no quedan más ladrillos en el juego.

Si no quedan más ladrillos, se establecen las variables "gameWon" en verdadero, "gameOver" y "gameStarted" en falso y "gameInfo" en falso también. Esto indica que el juego ha terminado y que el jugador ha ganado. En resumen, este método controla la victoria del jugador en el juego y establece las variables del juego correspondientes en consecuencia.


 reset() {
    this.pos.x = width / 2;
    this.pos.y = height - 94;
    this.vel.set(this.speed, -this.speed);
  }

}

//Este código es un método llamado "reset" que pertenece a la clase "Ball" en un juego. Este método se encarga de restablecer la posición y la velocidad de la pelota cuando se pierde una vida.

En este método, se establece la posición de la pelota en el centro de la pantalla horizontalmente y a una cierta distancia de la parte inferior verticalmente. También se establece la velocidad de la pelota para que se mueva hacia arriba y hacia la derecha.

En resumen, este método restablece la posición y la velocidad de la pelota a los valores iniciales cuando se pierde una vida en el juego.



class Brick extends Paddle {
  constructor(x, y, w, h, points) {
    super(x, y ,w, h);
    this.points = points;
  }

//Este código define una clase llamada "Brick" que extiende de la clase "Paddle". La clase "Brick" tiene un constructor que acepta los argumentos "x", "y", "w", "h" y "points". El constructor llama al constructor de la clase "Paddle" usando la función "super" y pasa los argumentos "x", "y", "w" y "h". Además, la clase "Brick" tiene una propiedad llamada "points" que se establece con el valor del argumento "points" pasado al constructor.

En resumen, este código define una clase "Brick" que hereda de la clase "Paddle" y tiene un constructor que acepta los mismos argumentos que el constructor de "Paddle" más un argumento adicional "points".

render() {
    push();
    strokeWeight(2);
    if (this.points === 1) {
      stroke("orchid");
      fill("yellow");
    } else if (this.points === 2) {
      stroke("darkpink");
      fill("pink");
    } else if (this.points === 3) {
      stroke("lightblue");
      fill("orange");
    } else if (this.points === 4) {
      stroke("lime");
      fill("green");
    } else if (this.points === 5) {
      stroke("blue");
      fill("red");
    } else if (this.points === 6) {
      stroke("black");
      fill("brown");
    } else if (this.points === 7) {
      stroke("black");
      fill("gray");
    }


//Este código define una función "render" que se encarga de dibujar un ladrillo en la pantalla con un borde y un color de relleno específico según la cantidad de puntos que otorga al ser destruido.
Se utiliza la función "stroke" para establecer el color del borde y la función "fill" para establecer el color de relleno del ladrillo.
Cada ladrillo puede otorgar diferentes cantidades de puntos y cada puntaje se corresponde con un color específico.

 rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width-2, this.height-2);
    textAlign(CENTER, CENTER);
    textSize(11);
    noStroke();
    fill(0);
    text(this.points, this.pos.x, this.pos.y);
    pop();   
  }
}

//Este código pertenece a la función "render" de la clase "Brick". Lo que hace es dibujar un rectángulo con las características y colores que dependen de los puntos que tiene el ladrillo.
Además, dibuja el número de puntos en el centro del ladrillo usando la función "text".



class Paddle {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.width = w;
    this.height = h;
  }

//Este código define una clase llamada "Paddle" que tiene un constructor que crea un objeto con las siguientes propiedades: posición (representada por un vector), velocidad (también un vector), ancho y altura del objeto.


 render() {
    push();
    strokeWeight(3);
    stroke("gold");
    fill("blue");
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    pop();
  }

//Este código pertenece a un método de la clase Paddle que se encarga de renderizar el objeto en la pantalla. 
Se dibuja un rectángulo con un borde dorado de grosor 3 y un relleno azul, cuyas coordenadas y dimensiones están determinadas por las propiedades pos, width y height del objeto.

update() {
    this.pos.add(this.vel);
    
    if (this.pos.x > width + this.width / 2)  {
      this.pos.x = -this.width / 2;
    } else if (this.pos.x < -this.width / 2) {
      this.pos.x = width + this.width / 2;
    }
  }

//Este código es un método llamado update() que se encarga de actualizar la posición del objeto que lo invoca en cada cuadro del juego. Primero, se agrega la velocidad a la posición actual.
Luego, se comprueba si la posición x del objeto está fuera de los límites de la ventana.
Si es así, se coloca el objeto en el lado opuesto de la ventana para que parezca que el objeto ha "atravesado" la ventana y continúa moviéndose en la dirección opuesta.


setDir(dir) {
    this.vel.set(dir * 8, 0);  
  }
  
//setDir() es un método que recibe una dirección (1 o -1) y establece la velocidad de la nave en consecuencia.


  reset() {
    this.pos.x = width / 2;
  }
  
 }

//reset() es un método que restaura la posición horizontal de la nave a la posición central de la pantalla.



INTERFAS y FUNCIONAMIENTO

let ball;
let paddle;
let bricks = [];
let w, h;
let gameStarted = false;
let gameInfo = true;
let gameOver = false;
let gameWon = false;
let score = 0;
let lives = 3;

//Este código declara una serie de variables utilizadas en un juego, incluyendo una bola, una pala, un array de ladrillos, el ancho y alto del canvas, y varias variables de estado del juego como si ha empezado o no, si se ha ganado o perdido, el puntaje y las vidas restantes.


function setup() {
  createCanvas(640, 480);

  ball = new Ball(width / 2, height - 94);
  paddle = new Paddle(width / 2, height - 80, 90, 12);
  
  createBricks(1);
}

//El código crea una función de configuración (setup) que se ejecuta una vez al comienzo del programa. Dentro de ella, se crea un lienzo de 640x480 píxeles y se inicializan varios objetos: una bola, una paleta y una serie de ladrillos que se crean utilizando una función createBricks.


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    paddle.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    paddle.setDir(-1);
  }

//El código define una función llamada keyPressed que se activa cuando se presiona una tecla en el teclado. Si la tecla presionada es la flecha derecha (RIGHT_ARROW), se llama al método setDir del objeto paddle con un argumento de 1. Si se presiona la flecha izquierda (LEFT_ARROW), se llama al mismo método setDir pero con un argumento de -1. En resumen, esta función maneja los eventos de presionar las teclas de flecha derecha e izquierda y modifica la dirección del objeto paddle.

 if (key == "1") {
    createBricks(1);
  } else if (key == "2") {
    createBricks(2);
  }

//Este código verifica si se ha presionado la tecla "1" o "2" y llama a la función "createBricks" con el argumento correspondiente. Si la tecla "1" está presionada, la función "createBricks" se llama con el argumento 1, lo que significa que se creará el nivel 1. Si la tecla "2" está presionada, se creará el nivel 2.

 if (keyCode === ENTER) {
    gameInfo = true;
    gameOver = false;
    gameStarted = false;
    gameWon = false;
    ball.reset();
    paddle.reset();
    createBricks(1);
    score = 0;
    lives = 3;
  }
  
//Este código verifica si se ha presionado la tecla ENTER. Si se ha presionado, se establece el estado de algunas variables a su estado inicial, se restablece la posición del objeto de bola y paleta, se crean nuevos ladrillos, el puntaje y las vidas se restablecen a sus valores iniciales.

if (key === ' ') {
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false;
  }

//Este código es un fragmento de un programa de JavaScript que maneja el comportamiento del teclado en un juego. Si la tecla presionada es la barra espaciadora, se establecen varias variables del juego para iniciar el juego. Estas variables son gameStarted, gameInfo, gameWon y gameOver. gameStarted se establece en true para indicar que el juego ha comenzado, mientras que gameInfo, gameWon y gameOver se establecen en false para indicar que la pantalla de información, la pantalla de victoria y la pantalla de game over deben desaparecer.


}

function keyReleased() {
  paddle.setDir(0);
}

function draw() {
  const bkg = color("lightblue");
  background(red(bkg)/2, green(bkg)/2, blue(bkg)/2);
  
  for (let i = 0; i < lives; i++) {
    fill("white");
    stroke("black");
    strokeWeight(3);
    circle(i*45 + 30, 35, 30);
  }
  
//El código parece ser parte de un programa para un juego en el que hay una pelota que rebota en una pantalla y un objeto que se mueve horizontalmente para golpear la pelota. La función keyReleased() se activa cuando se suelta una tecla del teclado y establece la dirección del objeto en 0, lo que significa que el objeto se detendrá. La función draw() dibuja elementos en la pantalla, como vidas representadas por círculos blancos con borde negro, y establece el color de fondo en un tono de azul claro.


textSize(25);
  fill("lime");
  stroke(0);
  strokeWeight(4);
  text("Puntiación : " + score, width - 100, height / 4 - 80);
  strokeWeight(2);
  stroke("black");
  text("Puntiación : " + score, width - 100, height / 4 - 80);
  
  textSize(30);
  fill(255);
  strokeWeight(4);
  stroke("navy")
  text("Juego de los bloques", width / 2 - 10, height / 4 - 90);

//Este código dibuja dos textos en la pantalla. El primero muestra la puntuación actual del jugador, en tamaño de fuente 25, con el color de relleno verde claro, y con un borde negro de grosor 4 y otro borde de grosor 2 también negro. Este texto se muestra en la esquina superior derecha de la pantalla.

El segundo texto es el título del juego "Juego de los bloques", en tamaño de fuente 30, con el color de relleno blanco y un borde azul oscuro de grosor 4. Este texto se muestra en la parte superior central de la pantalla.


for (let brick of bricks) {
    brick.render();
  }
  ball.render();
  paddle.render();
  ball.edges();
  ball.end();
  ball.won();

//Este código es parte de una función que dibuja una escena de un juego de bloques. En él se utiliza un bucle for para iterar sobre una serie de objetos "brick" y llamar al método "render" para cada uno de ellos. Luego se llama a los métodos "render" para "ball" y "paddle". Por último, se llaman a los métodos "edges", "end" y "won" para el objeto "ball".


  if (gameInfo && !gameStarted && !gameOver && !gameWon) {
    textAlign(CENTER, CENTER);
    textSize(20);
    fill("orange");
    strokeWeight(3);
    stroke(0);
    text("Utiliza las flechas para mover el palo", width / 2, height / 2);
    text("Usa 1 y 2 para alternar niveles", width / 2, height / 2 + 25);
    fill("Red");
    text("Teclea espacio para jugar", width / 2, height / 2 + 50);
    ball.pos.x = paddle.pos.x;
  }

//Este código muestra un mensaje de instrucciones en la pantalla si la variable gameInfo es verdadera y las variables gameStarted, gameOver y gameWon son falsas. Las instrucciones explican cómo mover el paddle, cómo alternar los niveles y cómo empezar el juego. El código también establece la posición de la bola en el paddle cuando se muestra el mensaje de instrucciones.


if (gameStarted && !gameInfo && !gameOver && !gameWon) {
    paddle.update();
    ball.update();  
    ball.bounce(paddle);
    
    let ABBrick = false;
    for (let i = bricks.length - 1; i >= 0; i--) {
      let brick = bricks[i];
      if (ball.colliding(brick)) {
        if (ABBrick === false) {
          ball.bounceOff(brick);
          ABBrick = true;
        }
        score += brick.points;
        bricks.splice(i, 1);
      }
    }
  }

//Este código se ejecuta mientras el juego está en progreso y no hay información del juego, ni se ha ganado o perdido el juego. Actualiza la posición de la paleta y la bola en función de las entradas del usuario y la física del juego. Comprueba si la bola colisiona con un ladrillo y, si es así, actualiza la puntuación y elimina el ladrillo. También hace que la bola rebote en el ladrillo colisionado.



  if (gameOver && !gameStarted && !gameInfo && !gameWon) {
    fill("red");
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    stroke("firebrick");
    textSize(50);
    text("NIMODO :´´/", width / 2, height / 2);
    fill("black");
    textSize(20);
    text("Teclea enter para jugar de nuevo", width / 2, height / 2 + 75);
  }
  
  if (gameWon && !gameOver && !gameStarted && !gameInfo) {
    textAlign(CENTER, CENTER);
    textSize(70);
    stroke("Chartreuse");
    strokeWeight(6);
    fill("MediumSpringGreen");
    text("ALGO BIEN", width / 2, height / 2);
    stroke(0);
    strokeWeight(3);
    text("ALGO BIEN", width / 2, height / 2);
    fill("lime");
    stroke(0);
    textSize(20);
    text("TE LA RIFASTE!!", width / 2, height / 2 - 100);
    fill("lime");
    text("press enter to play again!", width / 2, height / 2 + 50);
    
  }

}

//Este es el final del programa, donde se muestran mensajes diferentes según si el jugador ha perdido o ganado el juego. Si el juego ha terminado porque el jugador ha perdido (gameOver es verdadero), entonces se muestra un mensaje en rojo que indica "NIMODO :´´/", y se pide al jugador que presione Enter para jugar de nuevo. Si el jugador ha ganado (gameWon es verdadero), entonces se muestra un mensaje en verde que dice "ALGO BIEN" y se pide al jugador que presione Enter para jugar de nuevo. En ambos casos, los mensajes se muestran centrados en la pantalla. Si el juego no ha terminado ni ha sido ganado, entonces no se muestra nada.


function createBricks(level) {
  if (level === 1) {
    bricks.splice(0);
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 7; j++) {
        w = width / 14;
        h = 15;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, 7-j));
      }
    }
  } else if (level === 2) {
    bricks.splice(0);
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < j+1; i++) {
        w = width / 14;
        h = 15;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, (2*(14-i)-1) % 8));
      }
    }
  }
}

//Este es un código que crea los ladrillos del juego. Toma un argumento "level" que puede ser 1 o 2 y luego crea los ladrillos según el nivel.

Para el nivel 1, crea 98 ladrillos dispuestos en 14 columnas y 7 filas. Cada fila tiene un color diferente, siendo la fila más baja la más valiosa y la superior la menos valiosa.

Para el nivel 2, crea 105 ladrillos dispuestos en una forma de triángulo. Los ladrillos se disponen en filas, con cada fila teniendo un ladrillo más que la fila anterior. Los ladrillos tienen colores diferentes, siendo el color dependiente de la posición del ladrillo en su fila.
















































