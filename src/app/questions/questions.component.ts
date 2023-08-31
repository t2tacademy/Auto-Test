import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private router: Router) { }
  focus: any;
  question_iterator = 0;
  questions: any[] = [
    {
      question: 'El liderazgo es una actividad que se desarrolla con la práctica. ¿Cuántas Horas promedio de videos sobre liderazgo vistos en los últimos años y actividades en asociaciones?',
      answers: [
        '0 hs - No lideré en asociaciones',
        'Vi 2-3 videos y participo en una asociación',
        'Vi videos, pero no los practiqué.',
        'No vi muchos videos, pero lidero actividades en \"X\" asociación',
        'Veo muchos videos y lidero actividades']
    },
    {
      question: '¿Cómo logras conseguir lo que quieres y cuál es tu método de influencia?',
      answers: [
        'Doy indicaciones y controlo, a veces sin resultados',
        'Doy tareas, me frustro si no se cumplen, trato de no controlar',
        'Doy muchas tareas a quienes responden, sin controlar demasiado',
        'Consigo que personas autónomas hagan tareas con mis ideas',
        'Estimulo personas y logro resultados sin control']
    },
    {
      question: 'El relacionamiento depende de nosotros. Esto ayudará a transitar más rápido mi carrera. ¿Cómo enfrentas un nuevo desafío en una nueva empresa, puesto o equipo?',
      answers: [
          'Escucho y hago lo que me dicen. Mi jefe debe darme tareas.',
        'Hago algunas cosas por mi cuenta, evito preguntar por temor a dar mala impresión',
        'Aprendo rápido y trato de no cambiar nada para no cometer errores',
      'No solo hago mis tareas, también intento mejorarlas',
      'Modifico y mejoro lo que me piden, aun con riesgos']
    },
    {question: 'En una reunión sobre un tema desconocido, un compañero tuyo será el expositor ¿cómo actúas?',
      answers: ['Me quedo en silencio para evitar errores',
        'Me pone nervioso opinar (sabiendo que esperan que hable), no quiero afectar a mi compañero',
        'Despues de la reunión, Hago comentarios positivos y negativos solo a mi jefe',
      'Hago comentarios positivos y negativos al compañero después',
      'Durante la reunión destaco puntos positivos, aunque pueda equivocarme']
    },
    {
      question: '¿Qué habilidades debes desarrollar para ser parte de un equipo de alto rendimiento?',
    answers: [
      'Prefiero trabajar solo',
        'Me esfuerzo pero me gusta trabajar solo',
        'Me pone nervioso trabajar con otras personas, pero sé que debo adaptarme',
        'Me gusta ser parte de equipos y mejorar',
        'Me encanta ser parte y liderar equipos, logrando resultados'
    ]},
    {
      question: 'La complejidad del mundo va creciendo. Ante un problema, ¿cómo actúas?',
      answers: [
          'Elijo la solución fácil, rápida o que me gusta',
          'Reflexiono superficialmente y elijo la solución obvia',
          'Consulto con colegas, evalúo varias soluciones pero si es compleja la descarto',
          'Busco perspectivas y alternativas, opto por la óptima pero sino funciona voy por la obvia',
          'Profundizo en alternativas, perspectivas y riesgo. Busco la solución perdurable.'
      ]
    },
    {
      question: '¿Cuánta energía y creatividad dedicas a aprobar un trabajo, idea o propuesta?',
      answers: [
          'Comparto la idea con mis palabras, con poca información, como es buena mi interlocutor debe aceptarla',
          'Me entreno y preparo material y datos para compartir',
          'Mejoro el material para atraer a mi interlocutor con palabras claves',
          'Entreno y practico la presentación y preparo respuestas',
          'Diseño material para deleitar, persuadir e influenciar a mi jefe'
      ]
    },
    {
      question: 'Durante una reunión o al escuchar a otra persona, ¿qué suele sucederte?',
      answers: [
          'No presto atención, su opinión no importa',
          'Me adelanto y estoy pensando en lo que debo decir después',
          'Me pregunto por qué no van al grano, pero me esfuerzo en escuchar',
          'Escucho pacientemente y adapto mis respuestas (que ya tenia antes)',
          'Escucho activamente y demuestro comprensión. Construyo sobre sus palabras'
      ]
    },
    {
      question: '¿Cómo gestionas tu tiempo para evitar una caída de tu productividad?',
      answers: [
          'Voy resolviendo lo urgente y cambio prioridades . Me ganan los mails y reuniones.',
          'Trato de ordenar al comienzo pero las cosas urgentes arruinan mi plan',
          'Tengo un plan diario y semanal y rechazo lo urgente sin sentido',
          'Tengo planes diarios, delego y analizo mi participación',
          'Uso herramientas y acuerdos de manera sistémica para liberar tiempo.'
      ]
    },
    {
      question: '¿Cómo te preparas para resolver problemas cada vez más complejos?',
      answers: [
          'No tengo un método',
          'Me estoy preparando sin un método definido',
          'Tengo un método pero me cuesta encontrar perdidas con impacto real',
          'Genero metas y desafios, “creo problemas” y busco soluciones óptimas',
          'Genero desafíos, desarrollo un método sistémico eficiente.'
      ]
    },
    {
      question: '¿En qué situación te sientes más cómodo liderando?',
      answers: [
          'Pensando solo y dando indicaciones a las personas',
          'Elaboro con una persona de confianza y luego asigno tareas al equipo',
          'Genero reuniones mostrando objetivos, dejando que opinen y asignando tareas',
          'Permitiendo que los equipos definan su contribución y sus actividades',
          'Transmitiendo la visión, apoyando con recursos y motivación a las personas'
      ]
    },
    {
      question: '¿Cómo influyes en otros y qué método usas? ¡espero que no el miedo!',
      answers: [
          'Muestro las consecuencias negativas sobre ellos por no cumplir',
          'Remarco la responsabilidad, controlo y doy indicaciones. Remarco incumplimientos',
          'Trato de entender por que no estamos evolucionando como deseamos, dar apoyo para que puedan avanzar. Refuerzo lo positivo de alcanzar la meta.',
          'Busco como motivar a las personas y refuerzo lo bueno de lo alcanzado. Me involucro.',
          'Alineo objetivos, genero ambiente positivo y de servicio. Brindo apoyo y reconocimiento'
      ]
    },
    {
      question: 'Creatividad e innovación. ¿Cómo enfocas la solución de problemas?',
      answers: [
          'Suelo ir directo a la solución rápida y más a la mano. Es suficiente b',
          'Trato de pensar en soluciones diferentes, pero no ahondo mucho',
          'Trato de investigar y pensar soluciones muy diferentes a la obvia o rápida.',
          'Suelo seguir pensando, e investigando de manera intensa, consultando a otras personas. Debo conseguir una solución diferente y creativa.',
          'Genero constantemente ideas diferentes, me gusta investigar, leer e interactuar de manera innovadora.'
      ]
    },
    {
      question: '¿Cómo te auto-desarrollas fuera del trabajo? Bill Gates dice 5 horas por semana',
      answers: [
          'Después de la universidad, estudiaré algún curso',
          'Leo cosas focalizadas en Google esporádicamente',
          'Participo en cursos específicos o gratuitos que me indiquen',
          'Semanalmente Leo artículos en linkedin y veo videos de google regularmente en base a mis deficiencias',
          'Tengo un plan de desarrollo especifico y detallado y dedico tiempo semanalmente. Trato de hacerlo un habito.'
      ]
    }
  ];
    isButtonDisabled = true;

    currentlyClickedCardIndex: number | null = null;

    data: number[] = [];
    private average: number;

    points: number[] = [];



  ngOnInit(): void {
    if (!(localStorage.getItem('loggedIn') === 'true')) {
        this.router.navigate(['/data-entry']);
    }
    this.question_iterator = 0;
  }
  next() {
    if ( this.question_iterator < this.questions.length - 1) {
      this.points.push(this.getCardValue(this.currentlyClickedCardIndex));
      this.isButtonDisabled = true;
      this.currentlyClickedCardIndex = null;
      this.question_iterator += 1;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        this.points.push(this.getCardValue(this.currentlyClickedCardIndex));
        this.fillData();
        localStorage.setItem('average', String(this.average.toFixed(1)));
        localStorage.setItem('data', String(this.data));
        this.router.navigate(['/results']);
    }

  }
  fillData() {
      const liderazgo = (this.points[0] * 2 + this.points[1] + this.points[2] + this.points[10] * 2 + this.points[4] + this.points[7]) / 8;
      const influencia = (this.points[1] * 2 + this.points[11] * 2 + this.points[6] + this.points[2] + this.points[3]) / 7;
      const rel_organizacional = (this.points[2] * 2 + this.points[3] * 2 + this.points[8] + this.points[4] + this.points[7]) / 7;
      const trabajo_equipo = (this.points[4] * 2 + this.points[7] * 2 + this.points[2] + this.points[4]) / 6;
      const pensamiento_critico = (this.points[5] * 3 + this.points[9] + this.points[12]) / 5;
      const transmision_ideas = (this.points[6] * 3 + this.points[12] + this.points[13] + this.points[1]) / 6;
      const creatividad = (this.points[12] * 3 + this.points[9] + this.points[5]) / 5;
      const resolucion_problemas = (this.points[9] * 3 + this.points[6]) / 4;
      const gestion_tiempo = (this.points[8] * 4 + this.points[13] + this.points[4] + this.points[7]) / 7;
      const auto_desarrollo = (this.points[13] * 4 + this.points[0] + this.points[10] + this.points[8]) / 7;
      this.data = [Number(liderazgo.toFixed(1)), Number(influencia.toFixed(1)),
          Number( rel_organizacional.toFixed(1)), Number(trabajo_equipo.toFixed(1)),
          Number(pensamiento_critico.toFixed(1)), Number (transmision_ideas.toFixed(1)),
          Number(creatividad.toFixed(1)), Number(resolucion_problemas.toFixed(1)),
          Number(gestion_tiempo.toFixed(1)), Number(auto_desarrollo.toFixed(1))];
      this.average =  this.data.reduce((acc, current) => acc + current, 0) / 10;
  }

  getCardValue(index: number): number {
      return (index + 1) * 2;
  }


  setClickedCard(index: number) {
    if (this.currentlyClickedCardIndex === index) {
      this.isButtonDisabled = true;
      this.currentlyClickedCardIndex = null;
    } else {
        this.isButtonDisabled = false;
        this.currentlyClickedCardIndex = index;
    }
  }


}
