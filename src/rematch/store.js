import { init } from '@rematch/core'
import { session, patient, finding, image, table, section, handover, last } from './models'

const defaultState = {
  session: {
    date: new Date().toLocaleDateString().replace(/\//g, '.'),
    message: '',
    exit: '',
    start: '',
    transfer: '',
    end: '',
    rlp: false,
    rzp: false,
    vzzs: false,
  },
  patient: {
    name: '',
    lastName: '',
    house: '',
    address: '',
    pin: '',
    insurance: '',
    reason: '',
    diagnose: '',
    passportNum: '',
    firstAid: '',
    anamnesis: '',
  },
  finding: {
    openingEyes: [
      { title: 'Spontáne', number: 4, checked: false },
      { title: 'Na výzvu', number: 3, checked: false },
      { title: 'Na bolesť', number: 2, checked: false },
      { title: 'Žiadne', number: 1, checked: false }
    ],
    verbalContact: [
      { title: 'Orientovaný', number: 5, checked: false },
      { title: 'Dezorientovaný', number: 4, checked: false },
      { title: 'Neadekvatný', number: 3, checked: false },
      { title: 'Nedzrozumiteľný', number: 2, checked: false },
      { title: 'Žiadny', number: 1, checked: false }
    ],
    motorSkills: [
      { title: 'Na výzvu', number: 6, checked: false },
      { title: 'Na bolesť', number: 5, checked: false },
      { title: 'Necielená', number: 4, checked: false },
      { title: 'Flexia', number: 3, checked: false },
      { title: 'Extenzia', number: 2, checked: false },
      { title: 'Žiadna', number: 1, checked: false }
    ],
    eyeReflexes: [
      { title: 'Fotoreakcia', checked: {right: false, left: false} },
      { title: 'Deviácia', checked: {right: false, left: false} },
      { title: 'Zrenice (mm)', checked: {right: '', left: ''} },
      { title: 'Korneálny reflex', checked: {right: false, left: false} },
      { title: 'Pláv. bulby', checked: {right: false, left: false} },
      { title: 'Okulocef. reflex', checked: {right: false, left: false} }
    ],
    pain: [
      { title: 'Sine', checked: false },
      { title: 'Znesiteľna', checked: false },
      { title: 'Prijemná', checked: false },
      { title: 'Tangujúca', checked: false },
      { title: '', addTitle: true, checked: false }
    ],
    belly: [
      { title: 'Sine', checked: false },
      { title: 'Bolestivosť', checked: false },
      { title: 'Rezistencia', checked: false },
      { title: 'Défanse', checked: false },
      { title: '', addTitle: true, checked: false }
    ],
    airways: [
      { title: 'Priechodné', checked: false },
      { title: 'Aspirácia', checked: false },
      { title: 'Obštrukcia', checked: false },
      { title: '', addTitle: true, checked: false }
    ],
    breathing: [
      { title: 'Eupnoe', checked: false },
      { title: 'Apnoe', checked: false },
      { title: 'Dyspnoe', checked: false },
      { title: '', addTitle: true, checked: false }
    ],
    auscultationFinding: [
      { title: 'Nevyšetrené', checked: false },
      { title: 'Fyziologické', checked: {right: false, left: false, oneSide: true} },
      { title: '', checked: false },
      { title: '', addTitle: true, checked: false }
    ],
    neurologicalFinding: [
      { title: 'V norme', checked: false },
      { title: 'Kŕče', checked: false },
      { title: 'Paréza', checked: false },
      { title: 'Plégia', checked: false },
      { title: 'Mening. príznaky', checked: false },
      { title: 'Odch. stolice', checked: false },
      { title: 'Odch. moča', checked: false },
      { title: '', addTitle: true, checked: false },
      { title: '', addTitle: true, checked: false },
    ],
    circulation: [
      { title: 'Pravid.', checked: {right: false, left: false, oneSide: true} },
      { title: 'Nepravid.', checked: {right: false, left: false, oneSide: true} },
      { title: 'Plný', checked: {right: false, left: false, oneSide: true} },
      { title: 'Nitkovitý', checked: {right: false, left: false, oneSide: true} },
      { title: 'Sine', checked: {right: false, left: false, oneSide: true} }
    ],
    auscultationFindingPink: [
      { title: 'Pravid.', checked:  false },
      { title: 'Nepravid.', checked: false },
      { title: 'Ozvy ohr.', checked:  false },
      { title: 'Šel.', checked: false },
      { title: 'Asystólia', checked: false }
    ],
    leather: [
      { title: 'Ružová', checked: false },
      { title: 'Biedá', checked: false },
      { title: 'Cyanotická', checked: false },
      { title: 'Kapil. < 2 s', checked: false },
      { title: 'Návrat > 2 s', checked: false },
      { title: '', addTitle: true, checked: false },
    ],
  },
  image:{
    front: [],
    back: [],
  },
  table: {
    time: [],
    upv: [],
  },
  section: {
    services: {
      sine: false,
      airways: [
        { title: 'Sine', checked: false },
        { title: 'Manéver', checked: false },
        { title: 'Odsatie', checked: false },
        { title: 'Orotobus', checked: false },
        { title: 'OTI', checked: false },
        { title: '', checked: false },
      ],
      breathing: [
        { title: 'Sine', checked: false },
        { title: 'Inhal. O', checked: false },
        { title: 'UPV', checked: false },
        { title: 'PEEP', checked: false },
        { title: 'Drenáž', checked: {right: false, left: false, oneSide: true} },
        { title: '', checked: false },
      ],
      circulation: [
        { title: 'Sine', checked: false },
        { title: 'Perif. katéter', checked: false },
        { title: 'CVK', checked: false },
        { title: 'Pretlak. Inf', checked: false },
        { title: 'Inf. Pumpa', checked: false },
        { title: '', checked: false },
      ],
    },
    otherServices: {
      sine: false,
      otherServices: [
        { title: 'Krytie', checked: false },
        { title: 'Obväz', checked: false },
        { title: 'Tlak. Obväz', checked: false },
        { title: 'Škrtidlo', checked: false },
        { title: 'Repozícia', checked: false },
        { title: 'Dlaha', checked: false },
        { title: 'Fixačný golier', checked: false },
        { title: 'K. E. D.', checked: false },
        { title: 'Výplach žal.', checked: false },
        { title: 'Žal. sonda', checked: false },
        { title: 'Katéter moč.', checked: false },
        { title: 'Ved. pôrodu', checked: false },
        { title: '', addTitle: true, checked: false },
      ],
    },
    therapy: [],
    diagnosis: {
      title: '',
      subTitle: '',
      description: ''
    },
  },
  handover: {
    crew: {first: '', second: '', third: '', fourth: ''},
    handed: {name: '', signature: ''},
    handedWhere: '',
    taken: {name: '', signature: ''},
    intervention: false,
    sekund: false,
    neusp: false,
    indicated: false,
    notIndicated: false,
    abused: false,
    conditionImproved: false,
    unchanged: false,
    aggravated: false,
    treated: false,
    refusedTreatment: false,
    refusedTransportation: false,
    cooperation: '',
    death: {time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit", hour12: false }), checked: false},
    duration: '',
    distance: '',
    naca: '',
    services: '',
    note: '',
  },
  last: {
    note: '',
    duration: '',
    km: '',
    naca: '',
    services: '',
  },
}

const store = init({
  name: store,
  models: {
    session,
    patient,
    finding,
    table,
    image,
    section,
    handover,
    last
  },
  redux: {
    rootReducers: {
      RESET_APP: (state, action) => { return {...state, ...defaultState} },
    }
  },
})

export default store