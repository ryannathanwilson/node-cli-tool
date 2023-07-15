import inquirer from 'inquirer'

async function question() {
  const answer = await inquirer.prompt({
    name: 'question',
    type: 'list',
    message: 'What is your favorite language',
    choices: ['JavaScript', 'Rust', 'Go', 'German'],
  })

  return answer.question === 'German'
}

export default question
