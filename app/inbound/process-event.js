const { getEventType } = require('./get-event-type')
const { validateEventData } = require('./validate-event-data')
const { save } = require('./save-event')

const processEvent = async (event) => {
  const eventType = getEventType(event.type)
  validateEventData(event.data, eventType)
  await save(event, eventType)
}

module.exports = {
  processEvent
}
