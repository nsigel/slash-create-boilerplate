import { CONFIG } from "./../utils/env";
import {
	ApplicationCommandType,
	CommandContext,
	SlashCommand,
	SlashCreator,
	MessageOptions,
} from "slash-create";

export default class HelloCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "hello",
			description: "Says Hello!",
			guildIDs: CONFIG.GUILD_IDS,
			defaultPermission: true,
			type: ApplicationCommandType.CHAT_INPUT,
		});
	}
	async run(ctx: CommandContext): Promise<MessageOptions> {
		return { content: `Hello! <@${ctx.user.id}>` };
	}
}
