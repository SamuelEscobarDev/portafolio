const projects = [{
    id: "neon-light",
    tittle: "Neon Light Evo, un divertido sidescroller con estetica pixel art",
    banner: "img/thumbs/neon-thumb1-min.jpg",
    tags: ["Diseño de video juegos"],
    content: [{
        type: "tittle",
        value: "General"
    }, {
        type: "article",
        value: `Neon Light Evo es un videojuego de desplazamiento lateral en el que 
                        el jugador tiene la capacidad de detener el tiempo para esquivar ataques enemigos. 
                        La mecánica principal del juego es llegar al punto final en el menor tiempo posible 
                        para desbloquear recompensas y diferentes aspectos.`
    }, {
        type: "video",
        value: "vid/neon-light/simpleplay.mp4",
        loop: true
    }, {
        type: "article",
        value: `Aunque el concepto del videojuego es simple, sus mecánicas permiten una jugabilidad
                        más interesante, como movimientos complejos o partidas frenéticas. 
                        El diseño del juego permite que tanto jugadores experimentados como 
                        novatos disfruten del videojuego.`
    }, {
        type: "tittle",
        value: "Obstáculos"
    }, {
        type: "banner",
        value: "img/neon-light/enemies.jpg"
    }, {
        type: "article",
        value: `En el juego existen 7 tipos de enemigos: drones, torretas, picos, bloques inestables, 
                        láser, sierras y pistones. Cada uno representa un desafío dentro del juego.
                `
    }, {
        type: "article",
        value: `Las torretas pueden dañar al jugador a distancia, pero su limitación radica 
                        en su lentitud para seguir al jugador. Los drones pueden disparar en 
                        todas las direcciones, pero requieren tiempo para recargar.
                `
    }, {
        type: "article",
        value: `Los bloques inestables se destruyen cada vez que el jugador se para sobre ellos,
                        y los láseres requieren un golpe certero 
                        para ser destruidos.
                `
    }, {
        type: "article",
        value: `Las sierras son indestructibles, al igual que los picos.
                `
    }, {
        type: "article",
        value: `
                        El jugador comienza con 3 estrellas en cada sesión. Al morir, pierde una estrella y, 
                        con ella, una posible recompensa. Cada enemigo puede eliminarte de un golpe, 
                        pero no todo es tan difícil: si gestionas el uso del slow motion, no tendrás 
                        problema para enfrentarte a ellos.
                `
    }, {
        type: "video",
        value: "vid/neon-light/falling-down.mp4",
        loop: true
    }, {
        type: "tittle",
        value: "Tienda"
    }, {
        type: "banner",
        value: "img/neon-light/store.jpg"
    }, {
        type: "article",
        value: `Neon Light Evo cuenta con una tienda donde el jugador puede personalizar 
                        su esfera con diferentes patrones o skins. Cada uno tiene una estética única, 
                        y también puedes comprar bundles con diferentes ventajas y diseños exclusivos.`
    }, {
        type: "article",
        value: `La tienda se carga con un archivo incluido en las actualizaciones del juego.
                        Esto permite incluir ofertas, contenido preprogramado y nuevas skins que 
                        se liberan gradualmente.`
    }, {
        type: "article",
        value: `Cada elemento de la tienda tiene una rareza única, organizada por colores, 
                        donde el legendario es amarillo, el épico es fucsia, el raro es
                        azul celeste y el común es verde. Según su rareza, se venden en la tienda.`
    }, {
        type: "banner",
        value: "img/neon-light/store-2.jpg"
    }, {
        type: "tittle",
        value: "Detalles técnicos"
    }, {
        type: "article",
        value: `Uno de los mayores desafíos durante el desarrollo de Neon Light fue lograr 
                        efectos visuales como el bloom. La meta principal era garantizar la máxima compatibilidad.`
    }, {
        type: "banner",
        value: "img/neon-light/map-preview.jpg"
    }, {
        type: "article",
        value: `Se diseñó un sistema de iluminación específico para este juego, donde las luces
                        no se consideran, y el bloom se convierte esencialmente en "toda la iluminación". 
                        Los efectos volumétricos de los fondos, como el fog, e incluso el brillo de algunas
                        cartas son texturas procedurales generadas a partir del brillo del elemento correspondiente.`
    }, {
        type: "article",
        value: `Se implementó un sistema para cargar mapas dinámicamente. Al inicio de cada partida, 
                        los bloques a utilizar se "precargan" y durante la partida se clonan y reubican. 
                        El juego divide adecuadamente cada grupo de bloques en "chunks". 
                        Cada chunk se crea o destruye a medida que se avanza, evitando cargar todo el mapa al comienzo.
                        Siendo un sidescroller, incluso se pueden cargar mapas enormes poco a poco, 
                        consumiendo muy pocos recursos.`
    }, {
        type: "tittle",
        value: "Estilos"
    }, {
        type: "article",
        value: `Neon Light cuenta con 3 estilos diferentes, cada uno diseñado para dar cierto 
                        tono a los entornos y mapas. Los estilos se pueden cambiar durante 
                        la ejecución con tan solo unos clics.`
    }, {
        type: "banner",
        value: "img/neon-light/styles.jpg"
    }, {
        type: "article",
        value: `La idea principal es simple: imitar el comportamiento de Mario Maker 2, 
                        donde los diferentes estilos pueden aplicarse sobre el mismo diseño con tan 
                        solo unos clics, sin necesidad de alterar el mapa en general.`
    }, {
        type: "article",
        value: `Para lograr esto, se implementó un sistema para cargar los bloques. 
                        En esencia, hay una plantilla en una base de datos que contiene los posibles bloques principales. 
                        Esta base de datos posee todos los estilos disponibles y una ID que los relaciona con un 
                        tipo de bloque específico. Cuando se carga un bloque, se verifica qué tipo de bloque es y,
                        basado en eso y en el estilo seleccionado, se carga el bloque correspondiente.`
    }, {
        type: "article",
        value: `Dado que el sistema de bloques es bastante ligero, este proceso se puede aplicar 
                        durante la ejecución sin problemas.`
    }, ]
}, {
    id: "neta-motor",
    tittle: "Neta Motosports",
    banner: "img/thumbs/neta-thumb1-min.jpg",
    tags: ["Diseño de video juegos", "Multijugador Local"],
    content: [{
        type: "tittle",
        value: "Todo un reto"
    }, {
        type: "article",
        value: `La idea principal con este proyecto era lograr una experiencia fluida en poco tiempo,
                        un juego competitivo 1vs1. Para crear el juego, tomé como referencia videojuegos como 
                        GTA San Andreas y Need for Speed, extrayendo los puntos importantes que el juego debía tener. 
                        El juego fue planeado con una selección de mapas, una selección de autos y la capacidad de jugar 
                        en cooperativo, así como la compatibilidad con mando.`
    }, {
        type: "video",
        value: "vid/neta-motor/gameplay-banner.mp4",
        loop: true
    }, {
        type: "article",
        value: `Puede sonar muy sencillo, pero fue un dolor de cabeza cumplir con esos requisitos.
                        El principal problema fue el modo cooperativo y el soporte para el mando y teclado. 
                        Para resolverlo, ideé un sistema que mezcla los controles de cada uno de los dispositivos de entrada 
                        y alterna el HUD dependiendo de cuál se esté utilizando. Puede parecer ineficiente, 
                        pero es similar a lo que utilizan juegos como Ghost Recon Wildlands. De esta manera, 
                        se pueden alternar diferentes tipos de controles sin ningún problema y sin necesidad 
                        de acceder a la configuración; todo es automático.
                `
    }, {
        type: "article",
        value: `Para la selección de autos, se implementó una base de datos sencilla donde cada automóvil 
                        posee una identificación única, y al ser seleccionado, se almacena en la entrada del jugador.
                        Fue difícil distinguir entre los jugadores conectados, ya que algunos podían desconectarse o 
                        modificarse durante la ejecución del programa. En esencia, lo que hice fue tomar la ID generada 
                        por el dispositivo en Unity y asociarla con el jugador. De esta manera, incluso si un dispositivo se desconecta, 
                        no se confundirá con otro jugador debido a la ID única que posee.
                `
    }, {
        type: "article",
        value: `Una de las metas que me propuse fue terminarlo en el menor tiempo posible, así que me impuse un
                        límite de 5 días para lograrlo. El primer día se dedicaría a planificar absolutamente todo, mientras que
                        los días restantes se utilizarían para llevar a cabo el plan. En general, estimar la duración de un proyecto
                        siempre suele ser complicado, incluso en estudios AAA. No obstante, cuando el proyecto no es tan grande y se
                        cuenta con la suficiente experiencia, se puede ser preciso con esa estimación. Al final, 
                        resultó efectivo hacerlo de esta manera.
                `
    }, {
        type: "tittle",
        value: "Jugabilidad"
    }, {
        type: "banner",
        value: "img/neta-motorsports/gameplay-2.jpg"
    }, {
        type: "article",
        value: `La mecánica es la típica de cualquier videojuego de carreras, con 
                controles sencillos y fáciles. Cualquier persona relacionada con el mundo 
                de los videojuegos de autos puede disfrutarlo sin problemas. Es necesario tener 
                al menos un mando para disfrutar del juego.`
    },
    {
        type: "banner",
        value: "img/neta-motorsports/split-screen.jpg"
    }, {
        type: "article",
        value: `El sistema cooperativo funciona igual que en cualquier video juego de Play Station 2, 
                        cuando se conectan los 2 mandos se detectan a los jugadores y cada jugador tiene 
                        autoria para seleccionar su vehiculo y una parte de la pantalla`
    }, {
        type: "tittle",
        value: "Detalles técnicos"
    }, {
        type: "banner",
        value: "img/neta-motorsports/physics.jpg"
    }, {
        type: "article",
        value: `Las físicas representaron un gran desafío, ya que experimentaban vibraciones constantes 
                        y presentaban fallas. Progresivamente, se perfeccionaron junto con los entornos para 
                        evitar cualquier error. Un obstáculo significativo era evitar que los objetos traspasaran el suelo. Por ello, 
                        desarrollé un sistema que permitiera colisiones realistas sin el riesgo de que el automóvil 
                        cayera a través del terreno.`
    }, {
        type: "article",
        value: `Se utilizó un conjunto de raycasts que detectan la ubicación de cada llanta y 
                        constantemente comparan sus posiciones en busca de incoherencias. 
                        Así, en caso de cualquier fallo, se corrige por completo. Es algo rudimentario, 
                        pero funciona bastante bien.`
    }, {
        type: "article",
        value: `Otro detalle que causó gran problema a la hora de desarrollarlo fue la cámara automática.
                        En este juego, funciona de la misma manera que en videojuegos como GTA V o Need For Speed,
                        donde la cámara apunta hacia la dirección en la que el jugador conduce su vehículo. `
    }, {
        type: "video",
        value: "vid/neta-motor/free-camera.mp4",
        loop: true
    }, {
        type: "article",
        value: `Para lograrlo, se implementó un sistema que, basado en la dirección de movimiento del auto, 
                        enfoca o desenfoca dos puntos claves: el frente y la parte trasera del vehículo. La cámara orbita 360
                        grados alrededor del auto y, dependiendo de su dirección de movimiento, genera un punto 
                        (relativo a la orientación del vehículo) donde la cámara debe posicionarse. Luego, 
                        realiza una transición suave entre el ángulo actual y el nuevo, orbitando alrededor del vehículo.`
    }, {
        type: "tittle",
        value: "Transmisión de música dinámica"
    }, {
        type: "banner",
        value: "img/neta-motorsports/music.jpg"
    }, {
        type: "article",
        value: `Obviamente, en los videojuegos de autos, el soundtrack es muy importante,
                        por lo que se creó un sistema donde los jugadores pueden colocar su propia música
                        en la raíz del proyecto. Esta se cargará automáticamente durante el juego,
                        y la música se puede cambiar o desactivar directamente mediante una combinación 
                        de botones o teclas.`
    }, {
        type: "article",
        value: `La música se guarda y almacena en formato MP3, y se reproduce sin necesidad de
                        incluirse en el proyecto, gracias a una biblioteca desarrollada para C#, que permite 
                        una carga dinámica de ese tipo de archivos y luego su conversión al audioclip de Unity.`
    }, ]
}, {
    id: "space-singularity",
    tittle: "Space Singularity un juego infinito en el espacio",
    banner: "/img/thumbs/space-singularity-thumb1-min.jpg",
    tags: ["Diseño de video juegos"],
    content: [{
        type: "tittle",
        value: "Sencillez"
    }, {
        type: "article",
        value: `El objetivo con Space Singularity es crear un juego fácil y sencillo de aprender,
                        pero que requiere una gran destreza si el jugador quiere superarse. 
                        La mecánica principal se basa en esquivar constantes ataques de enemigos y huir del agujero negro.`
    }, {
        type: "banner",
        value: "img/space-singularity/space-gameplay-1.jpg"
    }, {
        type: "article",
        value: `Fue diseñado para ser una experiencia sencilla de aprender y la curva de 
                        aprendizaje no es tan pronunciada, lo difícil viene cuando el jugador trata de superarse. 
                        Cada vez se hace más difícil romper los límites 
                        y esa es la parte divertida de Space Singularity.`
    }, {
        type: "tittle",
        value: "Cinemática introductoria"
    }, {
        type: "video",
        value: "vid/space-singularity/cinematic.mp4",
        loop: true
    }, {
        type: "article",
        value: `Hacer la cinemática de introducción fue un desafío, no solo por la creación de 
                        la cinemática en sí, sino también por lograr una transición suave entre la cinemática 
                        y el gameplay. Para ello, tuve que emplear varios trucos, como la compresión del audio, 
                        la optimización de algunas texturas, la precarga de activos, y otras técnicas más, 
                        con el fin de evitar una caída considerable de FPS al cambiar de escena.`
    }, {
        type: "article",
        value: `En esencia, la solución fue cargar diferentes activos uno a la vez por cuadro, 
                        de esta manera, en un segundo se pueden cargar más activos sin impactar
                        negativamente en el gameplay con bajones de FPS.`
    }, {
        type: "tittle",
        value: "Hecho en 10 días"
    }, {
        type: "article",
        value: `Este videojuego completo fue hecho en 10 días, un ejercicio práctico para refinar 
                        habilidades. La intención era hacer algo divertido y completo que fuera completamente rejugable.
                        El concepto se planeó durante los 2 primeros días y los demás fueron distribuidos 
                        entre el desarrollo del juego y la cinemática introductoria.`
    }, {
        type: "tittle",
        value: "Jugabilidad"
    }, {
        type: "banner",
        value: "img/space-singularity/space-death.jpg"
    }, {
        type: "article",
        value: `Space Singularity es un 'sidescroller' infinito donde la cámara avanza constantemente
                        hacia un punto y el jugador debe mover al personaje para evitar choques con algún
                        asteroide o ser impactado por alguna nave alienígena.`
    }, {
        type: "article",
        value: `Existen muchas maneras de perder. Una de ellas es siendo impactado por un asteroide, 
                        el pequeño astronauta será arrastrado con él. Otra es cuando el oxígeno llega a 0, 
                        el astronauta se quedará azul, o bien, por radiación, el astronauta se quedará verde 
                        a causa de la radiación y emitirá luz.`
    }, {
        type: "banner",
        value: "img/space-singularity/tuto-space.jpg"
    }, {
        type: "article",
        value: `En Space Singularity existen 2 tipos de consumibles o 'powerups', 
                        cada uno con una función diferente. El oxígeno evita que el personaje 
                        pierda por asfixia y el gas se utiliza para propulsarte lejos del agujero negro.
                        Cada uno se obtiene ya sea de un asteroide o una nebulosa.`
    }, {
        type: "tittle",
        value: "Música"
    }, {
        type: "article",
        value: `La música es un tema complicado. En Space Singularity se diseñó de la siguiente 
                        manera: existen 3 pistas, cada una con diferentes transiciones para mezclarse entre sí. 
                        El truco es que cada canción está pensada para escucharse en un punto específico del gameplay. 
                        A medida que avanza el tiempo y te acercas al agujero negro, las canciones van cambiando de tono y ritmo.`
    }, {
        type: "article",
        value: `Curiosamente, en este juego la música pesa más que el núcleo del juego en sí, 
                        por lo que fue un reto comprimirla sin perder calidad en tan solo 7 MB 
                        (las canciones en total pesan 8 MB). Era fundamental que las canciones 
                        no intervinieran en el peso final del proyecto, por lo que la idea que 
                        tuve fue hacer streaming de ellas. Mediante un sistema programado por mí, 
                        cada canción se fragmenta en pequeños trozos de tan solo 16 KB y 
                        se van enviando silenciosamente durante el gameplay para cargar 
                        las canciones sin que el jugador lo note.`
    }, {
        type: "tittle",
        value: "Detalles técnicos"
    }, {
        type: "article",
        value: `En el juego está constantemente evaluando las estadisticas 
                        del jugador para determinar cómo se genera el mapa a continuación, 
                        brindando así una experiencia más desafiante y justa.`
    }, {
        type: "video",
        value: "vid/space-singularity/procedural.mp4",
        loop: true
    }, {
        type: "article",
        value: `Space Singularity usa la generación procedural para ubicar los diferentes obstáculos 
                        en el mapa. La función es un poco menos compleja de lo que parece. 
                        Lo que hice fue crear diferentes variantes de 'chunks', cada uno con un conjunto 
                        de ubicaciones donde puede o no ir un obstáculo o un powerup y, en base a un algoritmo 
                        que evalúa la situación del jugador actual, posiciona o suprime el spawn de algún
                        elemento importante.`
    }, {
        type: "tittle",
        value: "Optimizacion de recursos"
    }, {
        type: "banner",
        value: "img/space-singularity/110mb.jpg"
    }, {
        type: "article",
        value: `Optimizar Space Singularity fue todo un reto, inicialmente las builds para Web 
                        pesaban 110 MB, aún con compresión. Esto se traducía en tiempos de carga prolongados y, 
                        en ocasiones, ni siquiera cargaba el videojuego. El truco para reducir el tamaño estuvo 
                        relacionado con muchas cosas, principalmente con texturas que tenían mucha resolución, 
                        la música y los módulos de Unity que no se usaban. Lo primero que se hizo fue retirar 
                        todos los módulos que no se usan. Para la música se usó el sistema de transmisión, 
                        los efectos se separaron de sus paquetes respectivos y se eliminó cualquier cosa que no se usara.`
    }]
}, {
    id: "editor-resources",
    tittle: "Editor de mapas y recursos 2D",
    banner: "/img/thumbs/map-resources-banner.jpg",
    tags: ["Programacion y herramientas"],
    content: [{
        type: "tittle",
        value: "Necesidad"
    }, {
        type: "article",
        value: `El editor de mapas surgió como una herramienta sencilla y práctica para la creación de mapas, 
                    al igual que el editor de paralaje. Hacer este tipo de mapas en Unity resulta tedioso, 
                    por lo que era necesario un editor como este para agilizar el proceso y hacerlo menos 
                    laborioso, a la vez que fomenta la creatividad.

                    Con él, es fácil probar el mismo diseño con distintos estilos y jugar 
                    directamente sin necesidad de abrir Unity.`
    }, {
        type: "banner",
        value: "img/editor-resources/screen-map-editor.jpg"
    }, {
        type: "article",
        value: `Las ventajas no acaban ahí. Gracias a la herramienta de fondo y paralaje, 
                    es posible crear fondos vistosos sin necesidad de manejar complejos shaders o preocuparse por la transparencia. 
                    Toda la información necesaria se almacena en los archivos .parallax o .background, respectivamente. 
                    Esto permite que dichos archivos se distribuyan de cualquier forma, ya sea mediante 
                    servidores web o en conjunto con la aplicación.`
    }, {
        type: "tittle",
        value: "Independencia de Neon Light"
    }, {
        type: "article",
        value: `El editor de mapas y el editor de recursos fueron creados específicamente para Neon Light; 
                    sin embargo, pueden ser utilizados independientemente, ya que ofrecen una 
                    gran flexibilidad y soporte para ser utilizados fuera de este entorno. 
                    Son capaces de generar información compatible con cualquier motor o sistema, 
                    ya que los datos se almacenan en formato .JSON y las imágenes se codifican en .PNG`
    }, {
        type: "banner",
        value: "img/editor-resources/editor-secreto.jpg"
    }, {
        type: "article",
        value: `Cada recurso generado es redistribuible y puede ser utilizado en cualquier 
                        lugar donde sea necesario. Como mencioné anteriormente, las posibilidades son ilimitadas. 
                        Esto incluye actualizaciones dentro del juego (IN-GAME), contenido descargable o contenido 
                        exclusivo que no requiere la descarga del juego completo o salir del mismo para usarse.`
    }, {
        type: "video",
        value: "vid/editor-resources/main-resources.mp4",
        loop: true
    }, {
        type: "tittle",
        value: "Extensiones"
    }, {
        type: "banner",
        value: "img/editor-resources/screen-properties.jpg"
    }, {
        type: "article",
        value: `Fácil de mejorar y ampliar: El editor de mapas y recursos fue diseñado 
                        de manera que sea fácil de mejorar y ampliar. Esto permite agregar nuevas 
                        funcionalidades y características según las necesidades del proyecto. 
                        Cada bloque registrado `
    }, {
        type: "tittle",
        value: "Estilos"
    }, {
        type: "banner",
        value: "img/neon-light/styles.jpg"
    }, {
        type: "article",
        value: `Implementación con Neon Light: El editor de mapas y recursos permite la implementación
                        de diferentes estilos visuales en los bloques y recursos creados. 
                        Esto se logra a través de una base de datos que contiene los posibles 
                        bloques principales y los estilos disponibles. Al cargar un bloque, se verifica 
                        el tipo de bloque y se carga el correspondiente según el estilo seleccionado. 
                        Esto permite adaptar el aspecto visual del juego según las preferencias del 
                        desarrollador o del proyecto. Además, ofrece la posibilidad de tener varios estilos 
                        y probarlos conforme al diseño del mapa..`
    }, {
        type: "tittle",
        value: "Detalles técnicos"
    }, {
        type: "article",
        value: `En este apartado, no hay mucho que decir; todo el proyecto 
                        fue concebido para ser ejecutado en dispositivos de baja gama. 
                        Representó un desafío asegurar esto, pero nada con lo que no se pudiera lidiar.`
    }, {
        type: "article",
        value: `Aunque es importante destacar que el editor de mapas posee una gran
                        flexibilidad y puede adaptarse a las necesidades de cada proyecto, 
                        ya sea utilizando HDRP o URP.`
    }]
}, {
    id: "metaverso",
    tittle: "Metaverso (Demo - Node JS)",
    banner: "/img/metaverso/banner.jpg",
    tags: ["Diseño de video juegos", "Multijugador"],
    content: [{
        type: "tittle",
        value: "General"
    },
    {
        type: "article",
        value: `Durante mi tiempo en Aguascalien3D, me asignaron la tarea de demostrar un posible "metaverso", permitiendo que múltiples usuarios interactuaran en un servidor local.`
    }, {
        type: "banner",
        value: "img/metaverso/gameplay.jpg"
    }, {
        type: "article",
        value: "El proyecto enfrentó dificultades, como la garantía de una conexión estable entre los jugadores, la gestión de escenarios complejos y la implementación de un sistema de personalización sencillo y expansible. A pesar de estos retos, logramos completar todo el desarrollo en una semana."
    }, {
        type: "video",
        value: "vid/metaverso/metaverso-hard-test.mp4",
        loop: true,
    }, {
        type: "tittle",
        value: "Conexion"
    }, {
        type: "article",
        value: `En la construcción del programa, la estabilidad de la conexión entre los jugadores era fundamental. Se empleó Socket.IO como la solución principal para implementar y gestionar las conexiones entre los usuarios. Una vez que un jugador se conecta al servidor a través de este socket, se transfiere toda la información crítica para el funcionamiento del juego. Esto incluye detalles como la vestimenta de los jugadores, sus configuraciones y sus ubicaciones en el entorno virtual.`
    }, {
        type: "video",
        value: "vid/metaverso/metaverso.mp4",
        loop: true,
    }, {
        type: "article",
        value: `Para mantener la eficiencia de la red, se diseñó un sistema para transmitir datos sobre la vestimenta de los jugadores solo una vez por sesión. En lugar de reenviar constantemente información estática, se optó por actualizar únicamente los valores dinámicos en caso de cambios detectados. Este enfoque minimizó la carga de datos, lo que resultó en una red más fluida y receptiva, proporcionando una experiencia de juego más estable y mejorada para todos los usuarios involucrados.`
    }, {
        type: "tittle",
        value: "Personalizacion"
    }, {
        type: "banner",
        value: "img/metaverso/hair-head.jpg"
    }, {
        type: "article",
        value: `Para la personalización en el proyecto, se creó una pequeña base de datos en el lado del servidor. Cada vez que un jugador ingresa por primera vez a la demo y registra sus datos, estos se almacenan en la base de datos del servidor. En Unity, se tiene una base de datos con diferentes elementos asociados a prendas de ropa, donde cada prenda tiene un ID único. Este conjunto de IDs se almacena en el servidor, por lo que cada vez que el jugador inicia sesión, descarga esa ID y se cargan sus preferencias de personalización.`
    }, {
        type: "banner",
        value: "img/metaverso/clothes.jpg"
    }, {
        type: "tittle",
        value: "Apartado gráfico"
    }, {
        type: "article",
        value: `Se empleó el sistema de partículas de Unity para el menú principal y la interfaz general del juego, otorgando efectos visuales atractivos y dinámicos. Esta incorporación de partículas fue esencial para mejorar el diseño visual del juego, aportando un toque de dinamismo a la experiencia del jugador y reforzando su inmersión en el mundo del juego.`
    }, {
        type: "video",
        value: "vid/metaverso/logo-metaverso.mp4",
        loop: true,
    },
    {
        type: "article",
        value: `Además, se desarrolló un shader personalizado para crear un efecto de "spawn" en el juego. Este shader fue una pieza clave para brindar un dinamismo visual desde el inicio del juego, creando un efecto cautivador que destacó en la experiencia de los jugadores, aumentando la atractiva y distintiva impresión visual del juego.`
    }, {
        type: "video",
        value: "vid/metaverso/transition-effect.mp4",
        loop: true,
    }, ]
}, {
    id: "fps-kit",
    tittle: "Kit de desarrollo para juegos de surpervivencia en primera persona",
    banner: "/img/thumbs/game-fps-kit.jpg",
    tags: ["Diseño de video juegos"],
    content: [{
        type: "tittle",
        value: "General"
    }, {
        type: "article",
        value: `Este kit de desarrollo surgió como un ejercicio para facilitar 
                    la creación de videojuegos en primera persona. La idea principal 
                    es tener un entorno de desarrollo modificable y sencillo para crear 
                    juegos de este estilo de manera rápida y sencilla. Para las pruebas,
                    utilicé armas de mods de Counter-Strike y algunos de esos modelos.`
    }, {
        type: "banner",
        value: "img/fps-kit/photo-1.jpg"
    }, {
        type: "article",
        value: `El kit cuenta con un set de herramienta y bases para cualquier 
                    tipo de shooter, animaciones procedurales, sistema de humo, muzzles flash, etc.
                    Tiene todo lo fundamental para hacer un juego divertido y entretenido`
    }, {
        type: "video",
        value: "vid/fps-kit/fps-kit.mp4",
        loop: true,
    }, {
        type: "tittle",
        value: "Armas"
    }, {
        type: "article",
        value: `El kit de desarrollo facilita considerablemente la adición o reemplazo 
                    de armas en el inventario del jugador, diseñado para ser muy sencillo 
                    de modificar. Cada arma cuenta con una identificación única 
                    y el inventario en sí es un objeto de C#, lo que simplifica 
                    su almacenamiento cuando sea necesario y su carga rápida durante la ejecución.`
    }, {
        type: "video",
        value: "vid/fps-kit/weapons.mp4",
        loop: true,
    }, {
        type: "article",
        value: `Cada arma puede tener una configuración personalizada, que incluye 
                    aspectos como retroceso, posición de apuntado, accesorios, entre otros.`
    }, {
        type: "tittle",
        value: "Granadas / Cuchillos"
    }, {
        type: "article",
        value: `El kit de desarrollo tiene soporte para armas arrojadizas 
                    como granadas o armas cuerpo a cuerpo como el cuchillo; 
                    agregarlas o quitarlas es realmente fácil.`
    }, {
        type: "video",
        value: "vid/fps-kit/granades.mp4",
        loop: true
    }, {
        type: "article",
        value: `El sistema permite configurar ese tipo de accesorios y asignarlos directamente 
                    a un "inventario" aparte, donde se almacenan las armas que se usan pero no se 
                    retienen en las manos. Cada una de estas armas posee estadísticas personalizables, 
                    como la fuerza con la que se lanzan o el rango de ataque.`
    }, {
        type: "tittle",
        value: "Daño y particulas"
    }, {
        type: "article",
        value: `El sistema de daño tiene una función básica: es capaz de modificar el sonido 
                    del jugador saturando los graves para simular una sensación de "ahogo". 
                    Además, modifica la interfaz, mostrándola en escala de grises. 
                    También reproduce sonidos de respiración y gemidos.`
    }, {
        type: "video",
        value: "vid/fps-kit/damage.mp4",
        loop: true,
    }]
}
]
