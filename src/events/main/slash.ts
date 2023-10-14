import { CommandInteractionOptionResolver } from "discord.js";
import { client } from "../..";
import { Event } from "../../structs/types/Event";

export default new Event({
    name: "interactionCreate",
    run(interaction) {
        if(!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command) return;

        const options = interaction.options as CommandInteractionOptionResolver

        // Como já temos o valor aqui dentro e ele tem o mesmo nome da chave, fica melhor assim
        // isso seria semelhante à client: client, interaction: interaction etc
        command.run({
            client,
            interaction,
            options
        })
    }
})