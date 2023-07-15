#!/usr/bin/env node

import chalk from 'chalk'
import gradient from 'gradient-string'
import figlet from 'figlet'
import askName from './src/askName.js'
import welcome from './src/welcome.js'
import question from './src/question.js'
import handleAnswer from './src/handleAnswer.js'
import sleep from './src/utils/sleep.js'

await welcome()
const name = await askName()

const q = await question()

await handleAnswer(q, name)

await sleep()

console.clear()
const message = 'V i c t o r y'
figlet(message, (_, data) => {
  console.log(gradient.pastel(data))
})
