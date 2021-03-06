const { Client: InteractionsClient, SlashCommand, Integration } = require('discord-interactive-core')
const { Client } = require('discord.js')

const TOKEN = process.env.TOKEN

const client = new Client()
const integration = new Integration()
const interactionsClient = new InteractionsClient({
    applicationId: '806938104082071552',
    authToken: `Bot ${TOKEN}`,
    integration
})

const time = (s) => new Promise(r => setTimeout(r, s))

class TestCommand2 extends SlashCommand {
    constructor(manager) {
        super(manager, {
            name: 'test2',
            description: 'Test command'
        })
    }

    async run(interaction) {
        await interaction.showLoadingIndicator(true)

        await time(5000)

        const init = await interaction.respond({
            content: 'Hello world!'
        })

        await time(3000)

        await init.edit({
            content: 'Hello world! *(edit)*'
        })

        await time(3000)

        const followup = await interaction.respond({
            content: 'This is message.'
        })

        await time(3000)

        await followup.edit({
            content: 'this is edit'
        })

        await time(3000)

        await followup.delete()
    }
}

interactionsClient.commands.guild('806936473005064202')
    .register([TestCommand2])
    .update()

client.on('ready', () => {
    console.log('READY')

    client.ws.on('INTERACTION_CREATE', data => {
        integration.emit('interaction-receive', data)
    })
})

client.login(TOKEN)
