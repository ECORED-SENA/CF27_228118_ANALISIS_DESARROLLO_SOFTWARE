export default {
  global: {
    componenteFormativo: 'Conceptos básicos de redes y <em>networking</em>',
    descripcionCurso:
      'Las redes de datos son aquellas que permiten interconectar diferentes dispositivos, con el propósito de compartir recursos e información. Para que la comunicación se dé, se requiere de una serie de elementos y componentes que la faciliten, como dispositivos y otras redes, para que incremente la productividad y facilite el acceso a los recursos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Definición y generalidades de redes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Modelos de referencia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos de comunicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Puertos de comunicación ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Medios de transmisión',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Recursos compartidos',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF27_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Modelos de referencia',
      referencia:
        'Mastering IT. (2020). <em>Un resumen completo del modelo #TCPIP (Todas sus capas en menos de 7 minutos)</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/1pB2kan_AFk',
    },
  ],
  glosario: [
    {
      termino: 'ISO',
      significado: 'Organización de Estándares Internacional. ',
    },
    {
      termino: 'Medio de transmisión',
      significado:
        'para que la comunicación entre un emisor y un receptor se realice, se requiere de un medio que facilite la conexión entre ambos extremos el cual es conocido como el medio de transmisión, este constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos. ',
    },
    {
      termino: '<em>Networking</em>',
      significado:
        'trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos que permiten potenciar y maximizar el potencial de las redes de datos. ',
    },
    {
      termino: 'Redes de datos',
      significado:
        'conjunto equipos (computadoras y dispositivos), conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, para compartir información (archivos), recursos (discos, impresoras, programas, etc.) y servicios (acceso a una base de datos, Internet, correo electrónico, chat, juegos, etc.). ',
    },
    {
      termino: 'Puerto de comunicación',
      significado:
        'interfaz a través de la cual los diferentes dispositivos que intervienen en una comunicación de red pueden enviar y recibir diferentes tipos de datos, los puertos pueden ser de tipo físico(<em>hardware</em>) o lógicos (<em>software</em>). ',
    },
    {
      termino: 'TCP/IP',
      significado: 'protocolo de control de transmisión. ',
    },
  ],
  referencias: [
    {
      referencia: 'Fernández Barcell, M. (2014). Medios de transmisión.',
      link: '',
    },
    {
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa. ',
      link: '',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., & Stevens, W. R. (2000). Comunicaciones y Redes de Computadores, 6a edición. Prentice-Hall. ',
      link: '',
    },
    {
      referencia:
        'Ternero, M. D. C. R., & Mondéjar, J. B. El Modelo de referencia OSI (ISO 7498). ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez ',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
