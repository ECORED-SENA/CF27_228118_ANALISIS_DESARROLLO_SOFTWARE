<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pb-5
      .p-4(style="background-color:#DEBEFB;border-radius:12px;")
        .row
          .col(style="place-self:center;" data-aos="fade-right")
            p.mb-0 En este componente formativo, se estudiarán los principios básicos de las redes de datos, sus componentes tanto físicos como lógicos, su interacción y comunicación. La fundamentación facilitará el acceso a recursos compartidos, incrementando su productividad. Se conocerá la definición y generalidades de las redes de datos, en la cual se comprenderá por qué son importantes, así mismo, se abordará los diferentes modelos de referencia, como son: ISO, IEEE, OSI, ANSI, EIA, TIA, UIT. Se llegará a los protocolos de comunicación, donde se conocerá sobre el emisor, destino, canal, código y mensaje, lo que permite que haya un ciclo adecuado en la comunicación. 
          .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro1.png")
      
      .row.mt-4
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro2.png")
        .col(style="place-self:center;" data-aos="fade-left")
          p Es igual importante trabajar en el conocimiento de los puertos de comunicación, donde se identificará el hardware y el software y se abordarán los medios de transmisión para reconocer los medios guiados como la fibra óptica y el cobre. De esta manera, el recorrido académico finalizará en los recursos compartidos y facilitará el trabajo que se realiza en red. 
          p.mb-0.fw-bold Muchos éxitos en este proceso de aprendizaje.  





    


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 110%
  bottom: -50px
  background: rgb(247,238,254)
  background: linear-gradient(180deg, rgba(247,238,254,0.1966036414565826) 0%, rgba(247,238,254,1) 8%, rgba(247,238,254,1) 100%)
</style>
