import { createSpinner } from 'nanospinner'
import sleep from './utils/sleep.js'

async function handleAnswer(isCorrect, name) {
  const spinner = createSpinner('Checking answer...').start()
  await sleep()

  if (isCorrect) {
    spinner.success({ text: `Nice work ${name}, you win!` })
  } else {
    spinner.error({ text: `💀 💀 💀 Loser!` })
    process.exit(1)
  }
}

export default handleAnswer
