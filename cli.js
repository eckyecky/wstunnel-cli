#!/usr/bin/env node

const argv = require('yargs')
  .command(
    ['client <url> <bind address|port>', '$0', 'c'],
    'create a wstunnel client',
    {
      prompt: { alias: 'p', describe: 'prompt for authentication', type: 'boolean' },
    },
    async argv => {
      let auth
      if (argv.prompt) {
        const inquirer = require('inquirer')

        auth = await inquirer.prompt([
          {
            name: 'username',
          },
          { name: 'password', type: 'password' },
        ])
      }

      require('./createClient')(argv.url, argv.port, auth)
    }
  )
  .help().argv
module.exports = argv
