import { CONFIG } from "./utils/env";
import { Client } from "discord.js";
import { GatewayServer, SlashCreator } from "slash-create";
import path from "path";

const client = new Client({ intents: 32767 });

const creator = new SlashCreator({
	applicationID: CONFIG.CLIENT_ID,
	publicKey: CONFIG.PUBLIC_KEY,
	token: CONFIG.BOT_TOKEN,
	client,
});

creator
	.withServer(
		new GatewayServer((handler) => client.ws.on("INTERACTION_CREATE", handler))
	)
	.registerCommandsIn(path.join(__dirname, "commands"))
	.syncCommands();

creator.on("synced", () => console.log("Synced commands"));

// Uncomment for Debug messages from the server logs

// creator.on("debug", (msg) => console.log(msg));

client.on("ready", async (client) => {
	client.user?.setActivity({ name: "github.com/fourwadu", type: "PLAYING" });
});

client.login(CONFIG.BOT_TOKEN);
