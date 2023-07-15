import inquirer from 'inquirer'

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
  })

  return answers.player_name || 'player'
}

export default askName
