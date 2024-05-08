const { DefaultAzureCredential } = require('@azure/identity')
const { TableClient } = require('@azure/data-tables')
const { storageConfig } = require('./config')
const { EVENT } = require('./constants/event-types')

let eventClient

const initialiseTables = async () => {
  if (storageConfig.useConnectionString) {
    console.log('Using connection string for Table Client')
    eventClient = TableClient.fromConnectionString(storageConfig.connectionString, storageConfig.eventTable, { allowInsecureConnection: true })
  } else {
    console.log('Using DefaultAzureCredential for Table Client')
    eventClient = new TableClient(`https://${storageConfig.account}.table.core.windows.net`, storageConfig.eventTable, new DefaultAzureCredential())
  }
  console.log('Making sure tables exist')
  await eventClient.createTable(storageConfig.eventTable)
}

const getClient = (eventType) => {
  switch (eventType) {
    case EVENT:
      return eventClient
    default:
      throw new Error(`Unknown event type: ${eventType}`)
  }
}

module.exports = {
  initialiseTables,
  getClient
}
