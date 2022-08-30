export const session = {
  state: {
    date: new Date().toLocaleDateString().replace(/\//g, '.'),
    message: '',
    exit: '',
    start: '',
    transfer: '',
    end: '',
    rlp: false,
    rzp: false,
    vzzs: false
  },
  reducers: {
    setSession: (state, payload) => ({...state, ...payload}),
    updateSession: (state, key, value) => {
      // console.log(state, key, value);
      // console.log({...state, [key]: value});
      state[key] = value;
      return state
    }
  }
}

export const patient = {
  state: {
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
  reducers: {
    setPatient: (state, payload) => ({...state, ...payload}),
    updatePatient: (state, key, value) => {
      // console.log(state, key, value);
      // console.log({...state, [key]: value});
      return ({...state, [key]: value})
    }
  },
  effects: {
    async asyncSetPatient(state, payload) {
      await new Promise((resolve) => {
        this.setPatient(state, payload)
        resolve();
      });
    },
  },
}

export const finding = {
  state: {
    // openingEyes: [
    //   { title: 'spontaneously', number: 4, state: false },
    //   { title: 'onCall', number: 3, state: false },
    //   { title: 'onHurt',number: 2, state: false },
    //   { title: 'none', number: 1, state: false }
    // ],
    // verbalContact: [
    //   { title: 'oriented', number: 5, state: false },
    //   { title: 'disoriented', number: 4, state: false },
    //   { title: 'adequate', number: 3, state: false },
    //   { title: 'inadequate', number: 2, state: false },
    //   { title: 'none', number: 1, state: false }
    // ],
    // motorSkills: [
    //   { title: 'onCall', number: 6, state: false },
    //   { title: 'onHurt', number: 5, state: false },
    //   { title: 'untargeted', number: 4, state: false },
    //   { title: 'flexion', number: 3, state: false },
    //   { title: 'extension', number: 2, state: false },
    //   { title: 'none', number: 1, state: false }
    // ],
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
    // start: '',
    // transfer: '',
    // end: '',
    // rlp: false,
    // rzp: false,
    // vzzs: false
  },
  reducers: {
    setFinding: (state, payload) => ({...state, ...payload}),
    updateFinding: (state, array, property) => {
      // console.log(state[array], array, property[0], property[1], property);
      const newArray = state[array].map((el) => {
        // console.log(el.title, title);
        if (el.title === property[0]) {
          if (property[2]) {
            el.checked[property[2]] = property[1]
          } else if (el.addTitle) {
            el.title = property[1]
          } else {
            el.checked = property[1];
          }
        }
        return el
      })
      // console.log(array, title, value);
      // console.log({...state, [key]: value});
      return ({...state, [array]: newArray})
    }
  }
}

export const image = {
  state: {
    front: [],
    back: []
  },
  reducers: {
    setImage: (state, payload, item) => ({...state, [payload]: [...state[payload], item]}),
    removeImage: (state, payload, id) => ({...state, [payload]: state[payload].filter((item) => item.id !== id)}),
    updateImage: (state, title, payload) => {
      console.log("UPDATE", [...state[title].filter((item, i) => i !== payload[0]), {...state[title][payload[0]], fill: payload[1]}],
       {...state[title][payload[0]], fill: payload[1]}, payload[1])
      return ({
      ...state, [title]: [...state[title].filter((item, i) => i !== payload[0]), {...state[title][payload[0]], fill: payload[1]}]
    })}
  }
}

export const table = {
  state: {
    time: [],
    upv: []
  },
  reducers: {
    setTable: (state, payload, title) => ({...state, [title]: [payload, ...state[title]]}),
    editTable: (state, payload, title) => ({...state, [title]: state[title].map((item) => item.id === payload.id ? payload : item)}),
    removeTable: (state, payload, title) => ({...state, [title]: state[title].filter((item) => item.id !== payload.id)})
  }
}

export const section = {
  state: {
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
    }
  },
  reducers: {
    setSection: (state, key, value) => {
      console.log(state, "sadfdasf", key, 'sadfasf', value);
      return {...state, diagnosis: {...state.diagnosis, [key]: value}}},
    updateSection: (state, section, property) => {
      // console.log('IN MODELS', state, '1', state[section], '2', state[section][property[0]], section, property[0], property[1], property[2], property[3]);
      if (property.length !== 2) {
        const newArray = state[section][property[0]].map((el) => {
          // console.log(el.title, property[1]);
          if (el.title === property[1]) {
            if (property[3]) {
              el.checked[property[3]] = property[2]
            } else if (el.addTitle) {
              el.title = property[2]
            } else {
              el.checked = property[2];
            }
          }
          return el
        })
        return ({...state, [section]: {...state[section], [property[0]]: newArray}})
      } else {
        return ({...state, [section]: {...state[section], [property[0]]: property[1]}})
      }
    },
    setArraySection: (state, payload, title) => ({...state, [title]: [payload, ...state[title]]}),
    editArraySection: (state, payload, title) => ({...state, [title]: state[title].map((item) => item.id === payload.id ? payload : item)}),
    removeArraySection: (state, payload, title) => ({...state, [title]: state[title].filter((item) => item.id !== payload.id)})
  }
}

export const handover = {
  state: {
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
    note: ''
  },
  reducers: {
    setHandover: (state, title, payload) => {
      console.log(state, "sadfdasf", title, 'sadfasf', payload);
      return ({...state, [title]: {...state[title], [payload[0]]: payload[1]}})
    },
    updateHandover: (state, key, value) => {
      state[key] = value
      return state
    }
  }
}

export const last = {
  state: {
    note: '',
    duration: '',
    km: '',
    naca: '',
    services: '',
  },
  reducers: {
    setLast: (state, payload) => ({...state, ...payload}),
    updateLast: (state, key, value) => {
      state[key] = value;
      return state
    }
  }
}
