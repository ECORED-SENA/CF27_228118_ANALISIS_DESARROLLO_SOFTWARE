<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Definición y generalidades de redes de datos
    
    .cont_1_1.pb-5
      .row(style="position:relative;")
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4(style="background-color:#F2E5FD;")
            p.mb-0 Las redes de datos son la interconexión de dos o más dispositivos conectados entre sí, a través de un medio de transmisión, con el propósito de compartir recursos e información. Una definición más formal de una red de datos o red de computadores es un conjunto de equipos (computadoras y dispositivos), conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, para compartir información (archivos), recursos (discos, impresoras, programas, etc.) y servicios (acceso a una base de datos, Internet, correo electrónico, chat, juegos, etc.). A cada una de las computadoras conectadas a la red se le denomina un nodo. (Mansilla, 2015) 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/1.png")
      
      .row.mt-4(style="position:relative;")
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/2.png")
        .col-lg-7(data-aos="fade-left")
          .p-4(style="background-color:#D6E1FD;")
            p.mb-0 Las redes de datos tienen por función potenciar e incrementar la productividad de las organizaciones al permitir que todos los dispositivos que se encuentran conectados, puedan acceder a los recursos que se encuentran compartidos. En los últimos años, la tecnología ha entrado a jugar un papel preponderante en el desarrollo y evolución de las organizaciones, cada vez está más inmersa en todos los procesos y actividades empresariales, personales y cotidianas.
      
      p.mt-4(data-aos="fade-right" style="position:relative;") Es así, como las redes han permitido que los servicios y el acceso a estos recursos sean cada vez más necesarios, porque se requiere tener en todo momento trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos, esto es lo que se conoce como #[em networking]. 

      .row.mt-4(style="position:relative;")
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 Para que las redes puedan interconectarse y trabajar en red, se requiere de una serie de componentes desde el punto de vista físico y lógico, dentro de los cuales se destacan los modelos de referencia, los protocolos de comunicación, los puertos de comunicación, los medios de transmisión y los recursos compartidos. 
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/3.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Modelos de referencia
    
    p(data-aos="fade-right") Los modelos de referencia se basan en la definición de una serie de capas, las cuales tienen cada una sus propias funciones y características, que se encargan de resolver un problema diferente en la comunicación; cada fase tiene un orden específico y cada una se sustenta en la capa anterior. 

    .col-xl-10.m-auto.mt-4(style="position:relative;")
      .p-4(style="background-color:#3A1D71;border-radius:6px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema1/4.svg")
          .col
            h5.ps-2.pe-2.mb-0(style="background-color:#00FFDF;max-width:fit-content;") ¿Y cuál es su propósito? 
            p.mb-0.text-white.mt-3 Los modelos de referencia tienen como propósito asistir en la comprensión más clara y sencilla de las funciones y los procesos involucrados en la interconexión de los diferentes dispositivos de red, para ello se establecen una serie de capas, que más que entrar en los detalles de las especificaciones técnicas requeridas en cada una de ellas, el modelo de referencia ayuda en la comprensión de lo que sucede, contribuyendo en el logro de un mejor entendimiento de las funciones y procesos involucrados. 
      
    .cont_1_1.mt-4.pb-4
      .col-xl-10.m-auto
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Al inicio del desarrollo de la tecnología y más propiamente de la computación, los diferentes fabricantes construían sus equipos y dispositivos para que fueran compatibles con dispositivos de sus propias marcas, lo que no facilitaba la interconexión de equipos y dispositivos de fabricantes distintos. Esto llevó a la necesidad de estandarizar, de manera que se permita la interconexión de una amplia gama de dispositivos, sin importar fabricante o tipo de #[em software]. #[strong Para que el intercambio de información sea posible se requiere el establecimiento de una serie de estándares, los cuales son construidos por una serie de organizaciones:] 

      .row.mt-5.justify-content-center(style="position:relative;")
        .col-lg-3.mb-5.col-md-6(data-aos="zoom-in")
          .h-100.p-3.pt-0.text-center(style="background-color:#E3DFEB;border-radius:8px;")
            figure.text-center
              img(src="@/assets/curso/tema1/6.svg" style="max-width:70px;display:inline;margin-top:-30px;")
            p.mt-0.mb-0 International Standards Organization 
        .col-lg-3.mb-5.col-md-6(data-aos="zoom-in")
          .h-100.p-3.pt-0.text-center(style="background-color:#E3DFEB;border-radius:8px;")
            figure.text-center
              img(src="@/assets/curso/tema1/7.svg" style="max-width:70px;display:inline;margin-top:-30px;")
            p.mt-0.mb-0 Instituto Nacional Americano de Normalización 
        .col-lg-3.mb-5.col-md-6(data-aos="zoom-in")
          .h-100.p-3.pt-0.text-center(style="background-color:#E3DFEB;border-radius:8px;")
            figure.text-center
              img(src="@/assets/curso/tema1/8.svg" style="max-width:70px;display:inline;margin-top:-30px;")
            p.mt-0.mb-0 Asociación de Industrias de Telecomunicaciones  
        .col-lg-3.mb-5.col-md-6(data-aos="zoom-in")
          .h-100.p-3.pt-0.text-center(style="background-color:#E3DFEB;border-radius:8px;")
            figure.text-center
              img(src="@/assets/curso/tema1/9.svg" style="max-width:70px;display:inline;margin-top:-30px;")
            p.mt-0.mb-0 Instituto de Ingenieros Electrónicos y Eléctricos 
        .col-lg-3.mb-5.col-md-6(data-aos="zoom-in")
          .h-100.p-3.pt-0.text-center(style="background-color:#E3DFEB;border-radius:8px;")
            figure.text-center
              img(src="@/assets/curso/tema1/10.svg" style="max-width:70px;display:inline;margin-top:-30px;")
            p.mt-0.mb-0 Asociación de Industrias Electrónicas
        .col-lg-3.mb-5.col-md-6(data-aos="zoom-in")
          .h-100.p-3.pt-0.text-center(style="background-color:#E3DFEB;border-radius:8px;")
            figure.text-center
              img(src="@/assets/curso/tema1/11.svg" style="max-width:70px;display:inline;margin-top:-30px;")
            p.mt-0.mb-0 Unión Internacional de Telecomunicaciones
      
      p(data-aos="fade-right" style="position:relative;") ISO definió un modelo de referencia como estándar para posibilitar las comunicaciones electrónicas a nivel global, conocido como el modelo OSI (Interconexión de Sistemas Abiertos). Para el caso de IEEE, es el organismo encargado de fijar los estándares para los elementos físicos de una red, cables, conectores e interfaces. 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Protocolos de comunicación
    
    p(data-aos="fade-right") Las comunicaciones en general requieren de una serie de elementos y actores que intervienen, dentro de los cuales se pueden encontrar: 

    .col-xl-8.m-auto.mt-5
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/12.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-3(x="17%" y="85%" numero="+" style="background-color:#E8EEFE;")
          p.mb-0 Es el encargado del origen del mensaje, en este se relacionan las personas o los dispositivos. 
        .tarjeta.color-acento-botones.p-3(x="50%" y="69%" numero="+" style="background-color:#E8EEFE;")
          p.mb-0 Es el elemento a transmitir. 
        .tarjeta.color-acento-botones.p-3(x="84%" y="85%" numero="+" style="background-color:#E8EEFE;")
          p.mb-0 Es el destino del mensaje y también se constituye de personas o dispositivos. 
        .tarjeta.color-acento-botones.p-3(x="51%" y="100%" numero="+" style="background-color:#E8EEFE;")
          p.mb-0 Son los medios por lo que el mensaje viaja.
        .tarjeta.color-acento-botones.p-3(x="50%" y="13%" numero="+" style="background-color:#E8EEFE;")
          p.mb-0 Cuyo lenguaje es utilizado para formar el mensaje.
    
    p.mt-5(data-aos="fade-right") Como se evidencia, toda comunicación debe contar con un emisor, un mensaje a enviar y un código que permite que el mensaje viaje por un canal. Para que ambos actores puedan interactuar se requiere contar con un código o lenguaje común, el cual permite que se puedan entender; ese estándar o lenguaje común, es lo que conocemos como un protocolo de comunicaciones, el cual es un conjunto de normas que están obligadas a cumplir todos los dispositivos, #[em hardware] y #[em software] que intervienen en una comunicación de datos entre computadoras y demás dispositivos, sin estas reglas o estándares, la comunicación resultaría caótica y por tanto, imposible. 

    .row.mt-4
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/13.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 Dependiendo de los servicios a los cuales accedemos a través de las redes de computadores, se define el protocolo de comunicación que se deberá emplear en la interacción entre el usuario que solicita y accede al servicio, y el dispositivo que se lo entrega. #[strong En general, en la transmisión y recepción de los datos, podemos encontrar dos grandes familias de protocolos:] 
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-lg.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
          .h-100.p-4.p-lg-5(style="background-color:#3A1D71;")
            h5.text-center(style="color:#00FFDF;") Protocolos orientados a la conexión 
            figure.mt-4.text-center
              img(src="@/assets/curso/tema1/14.svg" style="max-width:65px;display:inline;")
            .text-white.mt-3
              p Requieren un modo de comunicación de redes, donde se debe establecer una conexión antes de transferir datos. Se identifica el flujo de tráfico con un identificador de conexión en lugar de utilizar explícitamente las direcciones de la fuente y el destino. 
              p.mb-0 Se dice que un servicio de comunicación entre dos dispositivos está orientado a conexión, cuando antes de iniciar la comunicación, se valida el cumplimiento de ciertas variables como disponibilidad, alcance, origen, destino, etc., entre estos dispositivos y se negocian unas credenciales para hacer esta conexión más segura y eficiente. 
        .col-lg.ps-lg-0(data-aos="fade-left")
          .h-100.p-4.p-lg-5(style="background-color:#00FFDF;")
            h5.text-center Protocolos no orientados a la conexión 
            figure.mt-4.text-center
              img(src="@/assets/curso/tema1/15.svg" style="max-width:65px;display:inline;")
            .mt-3
              p Permite una comunicación entre dos puntos finales de una red, en los que un mensaje puede ser enviado desde un punto inicial o de origen a otro punto o dispositivo de la red sin acuerdo previo. El dispositivo en un extremo de la comunicación transmite los datos al otro, sin tener que asegurarse de que el receptor esté disponible y listo para recibir los datos. El emisor simplemente envía un mensaje dirigido al receptor.  
    
    p.mt-4(data-aos="fade-right") A continuación, se evidencian algunos ejemplos de los protocolos que son usados en los servicios que normalmente se utilizan en la comunicación entre las redes de datos. 

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Suite de protocolos según el modelo de referencia 
      figure
        img(src="@/assets/curso/tema1/16.svg" data-aos="zoom-in-up")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Puertos de comunicación
    
    .cont_1_2.pb-5
      p(data-aos="fade-right") Los puertos de comunicación son interfaces a través de las cuales los diferentes dispositivos que intervienen en una comunicación de red, pueden enviar y recibir diferentes tipos de datos, los puertos pueden ser de tipo físico (#[em hardware]) o lógico (#[em software]). 

      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/17.png")
        .col-lg-7(data-aos="fade-left")
          p Los puertos físicos permiten la conexión de diferentes componentes, tanto internos como externos, los que se llaman comúnmente periféricos; los puertos lógicos son aquellos que utilizan un espacio de la memoria principal del dispositivo (RAM), que se asocia con un puerto físico o un canal de comunicación, y que proporciona un espacio para el almacenamiento temporal de la información que se va a transferir entre la localización de memoria y el canal de comunicación. 
          figure.mt-4
            img(src="@/assets/curso/tema1/18.svg" style="max-width:90px;")
      
      p.fw-bold.mt-4(data-aos="fade-right") Algunos puertos de comunicación con servicios de red comunes, son: 

      .col-xl-8.m-auto.mt-4
        .row
          .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-3.text-center(style="background-color:#F2E5FD;border-radius:8px;")
              h5.fw-bold.mb-0 HTTP 80 
          .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-3.text-center(style="background-color:#F2E5FD;border-radius:8px;")
              h5.fw-bold.mb-0 Telnet 23
          .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-3.text-center(style="background-color:#F2E5FD;border-radius:8px;")
              h5.fw-bold.mb-0 FTP 21
          .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-3.text-center(style="background-color:#F2E5FD;border-radius:8px;")
              h5.fw-bold.mb-0 SMTP 26
      
      p.mt-4(data-aos="fade-right") Para que se establezca una comunicación entre un origen y un destino, se requiere entonces que tanto el emisor como el receptor utilicen el mismo protocolo de comunicaciones, pero además se requiere de un puerto de comunicación que facilite que los datos enviados desde el origen vayan por un canal exclusivo, por ejemplo, en la siguiente figura, se muestra cómo el servicio web que corresponde al protocolo HTTP, utiliza como interfaz o canal de comunicación, el puerto 80. 
        
      .col-xl-8.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 2.
          span Algunos puertos de comunicación con servicios de red comunes 
        .p-4.p-lg-5(style="background-color:#ECF2FF;" data-aos="zoom-in-up")
          figure
            img(src="@/assets/curso/tema1/19.svg")
      
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_4 1.4 Medios de transmisión
      
      .row.mt-4
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p Para que la comunicación entre un emisor y un receptor se realice, se requiere de un medio que facilite la conexión entre ambos extremos, el cual es conocido como el medio de transmisión. Este constituye el soporte físico a través del cual, emisor y receptor pueden comunicarse en un sistema de transmisión de datos. Los medios de transmisión se pueden categorizar en dos grandes tipos, los medios guiados y no guiados. 
          p.mb-0.fw-bold Los medios guiados conducen (guían) las señales, a través de un camino físico, dentro de los cuales podemos encontrar: 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/20.png")
      
      .col-xl-10.m-auto.mt-5
        .row.justify-content-center
          .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            h5 Trenzado
            figure
              img(src="@/assets/curso/tema1/21.png")
          .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            h5 Coaxial
            figure
              img(src="@/assets/curso/tema1/22.png")
          .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            h5 Fibra Óptica
            figure
              img(src="@/assets/curso/tema1/23.png")
      
      .row.mt-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/24.png")
        .col-lg-7(data-aos="fade-left")
          p Las señales que transportan cada medio son distintas, por ejemplo, en la fibra óptica los que se lleva son pulsos de luz, no eléctricos, mientras que el cobre transporta impulsos eléctricos. 
          p.mb-0 Los medios de transmisión no guiados, son aquellos cables que transportan ondas electromagnéticas sin usar un conductor físico, sino que se radian a través del aire, por lo que están disponibles para cualquiera que tenga un dispositivo capaz de aceptarlas. Normalmente utilizan el aire como el medio a través del cual, viajan las señales en frecuencias electromagnéticas, por lo que generalmente requieren de una antena que permita transmitir y recibir datos de diferentes tipos. 
      
      p.mt-4.fw-bold(data-aos="fade-right") Dentro de los medios de transmisión no guiados se pueden encontrar: 

      .row.mt-4.justify-content-center
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/25.svg")
              .col(style="place-self:center;")
                h5.mb-0 Radiofrecuencias 
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/26.svg")
              .col(style="place-self:center;")
                h5.mb-0 Microondas 
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/27.svg")
              .col(style="place-self:center;")
                h5.mb-0 Infrarrojos 
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/28.svg")
              .col(style="place-self:center;")
                h5.mb-0 Bluetooth 
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/29.svg")
              .col(style="place-self:center;")
                h5.mb-0 Wifi
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/30.svg")
              .col(style="place-self:center;")
                h5.mb-0 Satelital
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_5 1.5 Recursos compartidos
    
    p(data-aos="fade-right") Las redes de datos facilitan y potencian el trabajo en red entre los diferentes usuarios y dispositivos, de tal manera que se pueda acceder a dispositivos y recursos compartidos. Cuando mencionamos los recursos nos referimos a todos esos elementos, tanto #[em hardware] como #[em software], que pueden ser compartidos y utilizados por los diferentes dispositivos conectados. 
    p.fw-bold(data-aos="fade-left") Desde el punto de vista del #[em hardware], estos recursos pueden ser: 

    .row.mt-4.justify-content-center
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/31.svg")
            .col(style="place-self:center;")
              h5.mb-0 Impresora
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/32.svg")
            .col(style="place-self:center;")
              h5.mb-0 #[em Scanner]
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/33.svg")
            .col(style="place-self:center;")
              h5.mb-0 Almacenamiento
    
    p.mt-0.fw-bold(data-aos="fade-right") Y desde el punto de vista lógico, se pueden compartir recursos como: 
        
    .row.mt-4.justify-content-center
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/34.svg")
            .col(style="place-self:center;")
              h5.mb-0 Archivo
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/35.svg")
            .col(style="place-self:center;")
              h5.mb-0 Aplicaciones
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/36.svg")
            .col(style="place-self:center;")
              h5.mb-0 Bases de datos
      .col-lg-3.mb-4.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DEBEFB;border-radius:8px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/37.svg")
            .col(style="place-self:center;")
              h5.mb-0 Servicios
    
    
  
    
 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_1_1
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,239,255,1) 100%)
</style>
