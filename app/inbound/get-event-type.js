const { EVENT_PREFIX } = require('../constants/event-prefixes')
const { EVENT } = require('../constants/event-types')

const getEventType = (type) => {
  if (type.startsWith(EVENT_PREFIX)) {
    return EVENT
  } else {
    throw new Error(`Unknown event type: ${type}`)
  }
}

module.exports = {
  getEventType
}
