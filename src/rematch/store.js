import { init } from '@rematch/core'
import { session, patient, finding, image, table, section, handover, last } from './models'


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
  }
})

export default store