const { EVENT } = require('../../constants/event-types')
const { saveEvent } = require('./event')

const save = async (event, eventType) => {
  switch (eventType) {
    case EVENT:
      await saveEvent(event)
      break
    default:
      throw new Error(`Unknown event type: ${eventType}`)
  }
}

module.exports = {
  save
}
