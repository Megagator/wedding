const Rsvp = require('./Rsvp')
const { makeHtmlTable, makeCsv } = require('./builder')

async function add (json, ip, agent) {
  const params = {
    name: validateString(json.name, 'name'),
    attending: validateAttending(json.attending),
    guests: validateGuests(json.guests),
    song: json.song,
    ip: ip,
    userAgent: agent
  }
  return Rsvp.add(params)
}

async function list () {
  const data = await Rsvp.getAll()
  return makeHtmlTable(data)
}

async function csv () {
  const data = await Rsvp.getAll()
  return makeCsv(data)
}

function validateString (value, field) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`missing required field: ${field}`)
  }
  return value.trim()
}

function validateAttending (attending) {
  if (attending === null || attending === undefined || typeof attending === 'string') {
    throw new Error('missing required field: attending')
  }

  return (attending) ? 1 : 0
}

function validateGuests (guests) {
  const acceptable = [0, 1, 2, 3, 4, 5, 6]
  guests = parseInt(guests)
  if (guests === null || guests === undefined || !acceptable.includes(guests)) {
    throw new Error('missing required field: guests')
  }

  return guests
}

module.exports = { add, list, csv }
