import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "register",
    description: "Registre seu nick do LoL no banco de dados",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "nick",
            description: "Escreva seu nick",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async run({ interaction, options }) {

        const nick = options.getString("nick", true);

        await interaction.reply({ephemeral: true, content:`Seu nick é ${nick}`})
    }
})