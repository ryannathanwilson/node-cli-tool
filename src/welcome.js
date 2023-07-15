import chalkAnimation from 'chalk-animation'
import sleep from './utils/sleep.js'

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(`Here's my interactive CLI tool`)
  await sleep()
  rainbowTitle.stop()
}

export default welcome
