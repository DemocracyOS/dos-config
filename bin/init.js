#! /usr/bin/env node
var path = require('path')
var copyDir = require('copy-dir')

var from = path.join(__dirname, '..', 'template', 'config')
var to = process.env.CONFIG_PATH || path.join(process.cwd(), 'config')

copyDir(from, to, function (err) {
  if (err) {
    console.error(err)
    return process.exit(1)
  }

  console.log('· Config folder generated at: ', to)
  process.exit(0)
})
